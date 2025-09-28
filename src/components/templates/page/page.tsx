import cn from 'classnames';
import { FC } from 'react';

import { useAppType } from '../../../hooks';
import { UIAppType } from '../../../types';
import styles from './styles.module.scss';

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  appType?: UIAppType;
  children: React.ReactNode;
  classes?: Partial<Record<'root', string>>;
}

export const Page: FC<PageProps> = ({ appType, children, classes = {}, ...rest }) => {
  const contextAppType = useAppType();
  const currentAppType = contextAppType || appType;

  return (
    <div className={cn(styles.page, currentAppType, classes.root)} {...rest}>
      {children}
    </div>
  );
};
