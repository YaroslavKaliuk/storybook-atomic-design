import cn from 'classnames';
import { type ChangeEventHandler, type FC, forwardRef } from 'react';

import { IconMonoCheckbox } from '@frontend/ui-icons-v2';

import styles from './styles.module.scss';

export interface CheckboxProps {
  classes?: Partial<Record<'root' | 'title' | 'icon', string>>;
  name?: string;
  title?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox: FC<CheckboxProps> = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ classes = {}, title, disabled, checked, onChange, name }, ref) => (
    <label
      className={cn(styles.checkbox, classes.root)}
      data-id-component="checkbox"
      role="checkbox"
    >
      <input
        ref={ref}
        checked={checked}
        onChange={onChange}
        className={styles.checkbox__type}
        type="checkbox"
        disabled={disabled}
        name={name}
        hidden
      />
      <span className={cn(styles.checkbox__icon, classes.icon)}>
        <IconMonoCheckbox />
      </span>
      {title && <span className={cn(styles.checkbox__title, classes.title)}>{title}</span>}
    </label>
  ),
);
