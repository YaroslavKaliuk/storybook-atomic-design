import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { IconMonoDeleteCross, IconMonoEdit } from '@frontend/ui-icons-v2';

import { Avatar } from '../../atoms/avatar/avatar';
import styles from './styles.module.scss';

export interface RecipientItemProps {
  email: string;
  avatarImage: string;
  userInitials: string;
  classes?: Partial<
    Record<'root' | 'avatar' | 'actions' | 'button' | 'buttonText' | 'buttonDelete', string>
  >;
}

export const RecipientItem: FC<RecipientItemProps> = ({
  email,
  avatarImage,
  userInitials,
  classes = {},
}) => {
  const { t } = useTranslation();
  return (
    <div className={cn(styles.recipientItem, classes.root)} data-id-component="recipientItem">
      <div className={cn(styles.recipientItem__avatar, classes.avatar)}>
        <Avatar imgSrc={avatarImage} userInitials={userInitials} />
      </div>
      <div className={styles.recipientItem__email}>{email}</div>
      <div className={cn(styles.recipientItem__actions, classes.actions)}>
        <button className={cn(styles.recipientItem__button, classes.button)} onClick={() => {}}>
          <IconMonoEdit />
          <span className={cn(styles.recipientItem__buttonText, classes.buttonText)}>
            {t('plugins.recipient.edit')}
          </span>
        </button>
        <button
          className={cn(
            styles.recipientItem__button,
            styles.recipientItem__buttonDelete,
            classes.buttonDelete,
          )}
          onClick={() => {}}
        >
          <IconMonoDeleteCross />
          <span className={cn(styles.recipientItem__buttonText, classes.buttonText)}>
            {t('plugins.recipient.delete')}
          </span>
        </button>
      </div>
    </div>
  );
};
