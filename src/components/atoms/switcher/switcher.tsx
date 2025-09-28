import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';

export type SwitcherProps = {
  title?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  classes?: Partial<Record<'root' | 'title' | 'input', string>>;
};

export const Switcher: FC<SwitcherProps> = ({
  disabled = false,
  title,
  checked = false,
  onChange,
  id,
  name,
  classes = {},
}) => (
  <label className={cn(styles.switcher, classes.root)} data-id-component="switcher">
    {title && <span className={cn(styles.switcher__title, classes.title)}>{title}</span>}
    <input
      type="checkbox"
      disabled={disabled}
      checked={checked}
      onChange={onChange}
      id={id}
      name={name}
      className={cn(styles.switcher__input, classes.input)}
    />
  </label>
);
