import cn from 'classnames';
import { FC } from 'react';

import { IconMonoAdd, IconMonoClose } from '@frontend/ui-icons-v2';

import { UIColor, UISize } from '../../../types';
import styles from './styles.module.scss';

export interface EtagProps {
  title: string;
  size?: Exclude<UISize, UISize.lg | UISize.xl>;
  color?: UIColor;
  disabled?: boolean;
  isAdd?: boolean;
  isRemove?: boolean;
  onClick?: () => void;
  classes?: Partial<Record<'root' | 'icon' | 'title', string>>;
}

export const Etag: FC<EtagProps> = ({
  title,
  size = UISize.md,
  color = UIColor.primary,
  disabled = true,
  isAdd,
  isRemove,
  onClick,
  classes = {},
}) => (
  <button
    className={cn(styles.etag, styles.etag + size, styles.etag + color, classes.root)}
    type="button"
    disabled={disabled && !isAdd && !isRemove}
    onClick={onClick}
    data-id-component="etag"
  >
    {isAdd && (
      <span className={cn(styles.etag__icon, classes.icon)}>
        <IconMonoAdd />
      </span>
    )}
    <span className={cn(styles.etag__title, classes.title)}>{title}</span>
    {isRemove && (
      <span className={cn(styles.etag__icon, classes.icon)}>
        <IconMonoClose />
      </span>
    )}
  </button>
);
