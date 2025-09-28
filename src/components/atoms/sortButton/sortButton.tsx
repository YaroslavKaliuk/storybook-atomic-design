import cn from 'classnames';
import { FC } from 'react';

import { IconMonoArrowDown } from '@frontend/ui-icons-v2';

import styles from './styles.module.scss';

export interface SortButtonProps {
  classes?: Partial<Record<'root' | 'title' | 'icon', string>>;
  title: string;
  isActive?: boolean;
  onClick: () => void;
}

export const SortButton: FC<SortButtonProps> = ({ classes = {}, title, onClick, isActive }) => (
  <button
    className={cn(styles.sortButton, isActive && styles.sortButton__isActive, classes.root)}
    data-id-component="sortButton"
    type="button"
    onClick={onClick}
  >
    <span className={cn(styles.sortButton__title, classes.title)}>{title}</span>
    <span className={cn(styles.sortButton__icon, classes.icon)}>
      <IconMonoArrowDown />
    </span>
  </button>
);
