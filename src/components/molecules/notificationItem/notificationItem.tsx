import cn from 'classnames';
import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { formatToLocaleString } from '../../../utils';
import { Avatar } from '../../atoms';
import styles from './styles.module.scss';

export interface NotificationItemProps {
  classes?: Partial<
    Record<
      'root' | 'avatar' | 'content' | 'info' | 'userName' | 'text' | 'fileName' | 'time',
      string
    >
  >;
  fileName: string;
  userName: string;
  time: string;
  avatarImage: string;
  userInitials: string;
  onFileClick?: (fileName: string) => void;
}

export const NotificationItem: FC<NotificationItemProps> = ({
  classes = {},
  fileName,
  userName,
  time,
  avatarImage,
  userInitials,
  onFileClick,
}) => {
  const { t } = useTranslation();

  const formattedTime = useMemo(() => formatToLocaleString(time), [time]);

  const handleFileClick = useCallback(() => {
    onFileClick?.(fileName);
  }, [fileName, onFileClick]);

  return (
    <div className={cn(styles.notificationItem, classes.root)} data-id-component="notificationItem">
      <div className={cn(styles.notificationItem__avatar, classes.avatar)}>
        <Avatar imgSrc={avatarImage} userInitials={userInitials} />
      </div>
      <div className={cn(styles.notificationItem__content, classes.content)}>
        <div className={cn(styles.notificationItem__info, classes.info)}>
          <b className={cn(styles.notificationItem__userName, classes.userName)}>{userName}</b>{' '}
          <span className={cn(styles.notificationItem__text, classes.text)}>
            {t('plugins.notificationItem.hasInvitedYouToJoin')}
          </span>
          <button
            className={cn(styles.notificationItem__fileName, classes.fileName)}
            type="button"
            onClick={handleFileClick}
          >
            {fileName}
          </button>
        </div>
        <div className={cn(styles.notificationItem__time, classes.time)}>
          {t('plugins.notificationItem.time')} {formattedTime}
        </div>
      </div>
    </div>
  );
};
