import cn from 'classnames';
import { FC } from 'react';

import { useAppType } from '../../../hooks';
import { UIAppType } from '../../../types';
import styles from './styles.module.scss';

export interface MainProps {
  appType?: UIAppType;
  children: React.ReactNode;
  classes?: Partial<Record<'root', string>>;
}

export const Main: FC<MainProps> = ({ appType, children, classes = {} }) => {
  const contextAppType = useAppType();
  const currentAppType = contextAppType || appType;

  return (
    <main className={cn(styles.main, currentAppType, classes.root)} data-id-component="main">
      {children}
    </main>
  );
};
