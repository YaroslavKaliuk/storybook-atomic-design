import cn from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

import { useAppType } from '../../../hooks';
import { UIAppType, UIPlacement, UISize } from '../../../types/enums';
import styles from './styles.module.scss';

export interface TitleProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: Exclude<UISize, UISize.lg>;
  classes?: Partial<Record<'root', string>>;
  placement?: UIPlacement.center;
  appType?: UIAppType;
}

export const Title: FC<TitleProps> = ({
  children,
  size = UISize.md,
  classes = {},
  appType,
  ...rest
}) => {
  const contextAppType = useAppType();
  const currentAppType = contextAppType || appType;

  return (
    <div
      className={cn(styles.title, styles.title + size, currentAppType, classes.root)}
      data-id-component="title"
      {...rest}
    >
      {children}
    </div>
  );
};
