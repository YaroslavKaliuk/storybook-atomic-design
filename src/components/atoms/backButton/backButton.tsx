import cn from 'classnames';
import { FC, MouseEvent } from 'react';

import { IconMonoChevronLeft } from '@frontend/ui-icons-v2';

import styles from './styles.module.scss';

export interface BackButtonProps {
  classes?: Partial<Record<'root', string>>;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const BackButton: FC<BackButtonProps> = ({ classes = {}, onClick }) => (
  <button
    className={cn(styles.backButton, classes.root)}
    data-id-component="backButton"
    type="button"
    onClick={onClick}
  >
    <IconMonoChevronLeft />
  </button>
);
