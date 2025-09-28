import cn from 'classnames';
import { FC } from 'react';

import { useAppType } from '../../../hooks';
import { UIAppType } from '../../../types';
import styles from './styles.module.scss';

export interface HeaderProps {
  appType?: UIAppType;
  children: React.ReactNode;
  classes?: Partial<Record<'root', string>>;
}

export const Header: FC<HeaderProps> = ({ appType, children, classes = {} }) => {
  const contextAppType = useAppType();
  const currentAppType = contextAppType || appType;

  return (
    <header className={cn(styles.header, currentAppType, classes.root)} data-id-component="header">
      {children}
    </header>
  );
};
