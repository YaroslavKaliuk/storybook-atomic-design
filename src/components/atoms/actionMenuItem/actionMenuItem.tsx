import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';

export interface ActionMenuItemProps {
  classes?: Partial<Record<'root' | 'iconLeft' | 'iconRight' | 'title', string>>;
  title?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: () => void;
}

export const ActionMenuItem: FC<ActionMenuItemProps> = ({
  classes = {},
  title,
  iconLeft,
  iconRight,
  onClick,
}) => (
  <button
    className={cn(styles.actionMenuItem, classes.root)}
    type="button"
    data-id-component="actionMenuItem"
    onClick={onClick}
  >
    {iconLeft && (
      <span className={cn(styles.actionMenuItem__icon, classes.iconLeft)}>{iconLeft}</span>
    )}
    {title && <span className={cn(styles.actionMenuItem__title, classes.title)}>{title}</span>}
    {iconRight && (
      <span className={cn(styles.actionMenuItem__icon, classes.iconRight)}>{iconRight}</span>
    )}
  </button>
);
