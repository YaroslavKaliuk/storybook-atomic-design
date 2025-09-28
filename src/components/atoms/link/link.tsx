import cn from 'classnames';
import { ElementType, FC } from 'react';

import { UIColor } from '../../../types';
import styles from './styles.module.scss';

export interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {
  as?: ElementType;
  color?: UIColor;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  classes?: Partial<Record<'root', string>>;
}

export const Link: FC<LinkProps> = ({
  as: Component = 'a',
  children,
  color = UIColor.primary,
  href,
  classes = {},
  ...props
}) => (
  <Component
    className={cn(styles.link, styles.link + color, classes.root)}
    {...(Component === 'a' ? { href } : {})}
    {...props}
    data-id-component="link"
  >
    {children}
  </Component>
);
