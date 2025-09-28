import cn from 'classnames';
import { FC } from 'react';

import { IconMonoInlineDots } from '@frontend/ui-icons-v2';

import styles from './styles.module.scss';

export interface ActionMenuButtonProps {
  classes?: Partial<Record<'root', string>>;
  onClick?: () => void;
}

export const ActionMenuButton: FC<ActionMenuButtonProps> = ({ classes = {}, onClick }) => (
  <button
    className={cn(styles.actionMenuButton, classes.root)}
    data-id-component="actionMenuButton"
    type="button"
    onClick={onClick}
  >
    <IconMonoInlineDots />
  </button>
);
