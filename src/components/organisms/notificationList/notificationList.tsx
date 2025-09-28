import cn from 'classnames';
import { FC } from 'react';

import { NotificationItem } from '../../molecules';
import styles from './styles.module.scss';

export interface NotificationData {
  id: string;
  fileName: string;
  userName: string;
  time: string;
  avatarImage: string;
  userInitials: string;
  onFileClick?: (fileUrl: string) => void;
}

export interface NotificationListProps {
  notifications: NotificationData[];
  classes?: Partial<Record<'root' | 'empty', string>>;
}

export const NotificationList: FC<NotificationListProps> = ({ notifications, classes = {} }) => (
  <div className={cn(styles.notificationList, classes.root)} data-id-component="notificationList">
    {notifications.length > 0 ? (
      notifications.map((notification) => (
        <NotificationItem
          classes={{ root: styles.notificationList__item }}
          key={notification.id}
          fileName={notification.fileName}
          userName={notification.userName}
          time={notification.time}
          avatarImage={notification.avatarImage}
          userInitials={notification.userInitials}
          onFileClick={notification.onFileClick}
        />
      ))
    ) : (
      <div className={cn(styles.notificationList__empty, classes.empty)}>No notifications</div>
    )}
  </div>
);
