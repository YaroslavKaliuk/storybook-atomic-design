import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';

export interface LoaderProps {
  classes?: Partial<Record<'root', string>>;
}

export const Loader: FC<LoaderProps> = ({ classes = {} }) => {
  return (
    <div className={cn(styles.loader, classes.root)} data-id-component="loader">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none" strokeMiterlimit="10" />
      </svg>
    </div>
  );
};
