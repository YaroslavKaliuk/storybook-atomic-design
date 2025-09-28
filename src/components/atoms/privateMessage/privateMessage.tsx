import cn from 'classnames';
import { FC } from 'react';

import { IconMonoChevronDown } from '@frontend/ui-icons-v2';

import { UIColor } from '../../../types';
import styles from './styles.module.scss';

export interface PrivateMessageProps {
  title: string;
  content: string;
  avatar?: React.ReactNode;
  color: Exclude<UIColor, UIColor.special>;
  classes?: Partial<
    Record<'root' | 'header' | 'main' | 'content' | 'avatar' | 'title' | 'icon', string>
  >;
}

export const PrivateMessage: FC<PrivateMessageProps> = ({
  title,
  content,
  avatar,
  color = UIColor.primary,
  classes = {},
}) => (
  <div
    className={cn(styles.privateMessage, styles.privateMessage + color, classes.root)}
    data-id-component="privateMessage"
  >
    <label className={cn(styles.privateMessage__header, classes.header)}>
      <input type="checkbox" hidden />
      {avatar && (
        <span className={cn(styles.privateMessage__avatar, classes.avatar)}>{avatar}</span>
      )}
      <span className={cn(styles.privateMessage__title, classes.title)}>{title}</span>
      <span className={cn(styles.privateMessage__icon, classes.icon)}>
        <IconMonoChevronDown />
      </span>
    </label>
    <div className={cn(styles.privateMessage__main, classes.main)}>
      <div className={cn(styles.privateMessage__content, classes.content)}>{content}</div>
    </div>
  </div>
);
