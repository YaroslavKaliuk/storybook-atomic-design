import cn from 'classnames';
import { FC } from 'react';

import { useAppType } from '../../../hooks';
import { UIAppType } from '../../../types';
import styles from './styles.module.scss';

export interface FooterProps {
  appType?: UIAppType;
  children: React.ReactNode;
  classes?: Partial<Record<'root', string>>;
}

export const Footer: FC<FooterProps> = ({ appType, children, classes = {} }) => {
  const contextAppType = useAppType();
  const currentAppType = contextAppType || appType;

  return (
    <footer className={cn(styles.footer, currentAppType, classes.root)} data-id-component="footer">
      {children}
    </footer>
  );
};
