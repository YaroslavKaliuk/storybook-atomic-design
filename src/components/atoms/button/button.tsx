import cn from 'classnames';
import { ComponentPropsWithoutRef, FC, MouseEvent, ReactNode } from 'react';

import { UIColor, UISize } from '../../../types';
import { Loader } from '../loader';
import styles from './styles.module.scss';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  title?: string;
  size?: Exclude<UISize, UISize.lg | UISize.xl>;
  color?: UIColor;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  isLoading?: boolean;
  classes?: Partial<Record<'root' | 'title' | 'icon' | 'loader', string>>;
}

export const Button: FC<ButtonProps> = ({
  title,
  size = UISize.md,
  color = UIColor.primary,
  iconLeft,
  iconRight,
  isLoading,
  onClick,
  disabled,
  classes = {},
  ...props
}) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !isLoading) {
      onClick && onClick(event);
    }
  };
  return (
    <button
      className={cn(styles.button, styles.button + color, styles.button + size, classes.root)}
      data-id-component="button"
      onClick={handleClick}
      type={props.type ?? 'button'}
      disabled={disabled}
      {...props}
    >
      {isLoading && (
        <span className={cn(styles.button__loader, classes.loader)}>
          <Loader />
        </span>
      )}
      {iconLeft && <span className={cn(styles.button__icon, classes.icon)}>{iconLeft}</span>}
      <span className={cn(styles.button__title, classes.title)}>{title}</span>
      {iconRight && <span className={cn(styles.button__icon, classes.icon)}>{iconRight}</span>}
    </button>
  );
};
