import cn from 'classnames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { UISize } from '../../../types';
import { Avatar } from '../../atoms';
import styles from './styles.module.scss';

export interface GPSStatusItemProps {
  status: 'viewed' | 'shared';
  time: string;
  avatarImage: string;
  sharedWith?: string;
  userName?: string;
  userEmail?: string;
  userInitials: string;
  classes?: Partial<
    Record<'root' | 'top' | 'status' | 'time' | 'content' | 'avatar' | 'info' | 'userEmail', string>
  >;
}

export const GPSStatusItem: FC<GPSStatusItemProps> = memo(
  ({ status, time, avatarImage, sharedWith, userName, userEmail, userInitials, classes = {} }) => {
    const { t } = useTranslation();

    return (
      <div className={cn(styles.gpsStatusItem, classes.root)} data-id-component="gpsStatusItem">
        <div className={cn(styles.gpsStatusItem__top, classes.top)}>
          <div className={cn(styles.gpsStatusItem__status, classes.status)}>
            {status === 'viewed'
              ? t('plugins.gpsStatusItem.viewed')
              : t('plugins.gpsStatusItem.shared')}
          </div>
          <div className={cn(styles.gpsStatusItem__time, classes.time)}>{time}</div>
        </div>
        <div className={cn(styles.gpsStatusItem__content, classes.content)}>
          <div className={cn(styles.gpsStatusItem__avatar, classes.avatar)}>
            <Avatar imgSrc={avatarImage} size={UISize.md} userInitials={userInitials} />
          </div>
          <div className={cn(styles.gpsStatusItem__info, classes.info)}>
            {status === 'shared' && (
              <>
                <span>{t('plugins.gpsStatusItem.fileSharedWith')}</span>
                <span>{sharedWith}</span>
                <span>{t('plugins.gpsStatusItem.by')}</span>
              </>
            )}
            <span>{userName}</span>
          </div>
          <div
            className={cn(styles.gpsStatusItem__userEmail, classes.userEmail)}
            dangerouslySetInnerHTML={{
              __html: userEmail.split(/\s+/).filter(Boolean).join('<br />'),
            }}
          />
        </div>
      </div>
    );
  },
);
