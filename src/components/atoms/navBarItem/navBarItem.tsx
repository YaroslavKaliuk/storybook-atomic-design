import cn from 'classnames';
import { ComponentPropsWithoutRef, FC, forwardRef, ReactNode, useCallback } from 'react';

import styles from './styles.module.scss';

export interface NavBarItemProps extends Omit<ComponentPropsWithoutRef<'button'>, 'onClick'> {
  classes?: Partial<Record<'root' | 'icon' | 'title', string>>;
  icon: ReactNode;
  title: string;
  isActive?: boolean;
  onClick: () => void;
}

export const NavBarItem: FC<NavBarItemProps> = forwardRef<HTMLButtonElement, NavBarItemProps>(
  ({ classes = {}, icon, title, isActive, onClick, disabled, ...props }, ref) => {
    const handleClick = useCallback(() => onClick(), [onClick]);

    return (
      <button
        ref={ref}
        className={cn(styles.navBarItem, isActive && styles.navBarItem__active, classes.root)}
        data-id-component="navBarItem"
        onClick={handleClick}
        type="button"
        disabled={disabled}
        {...props}
      >
        <span className={cn(styles.navBarItem__icon, classes.icon)}>{icon}</span>
        <span className={cn(styles.navBarItem__title, classes.title)}>{title}</span>
      </button>
    );
  },
);
