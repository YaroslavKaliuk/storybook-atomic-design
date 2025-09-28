import cn from 'classnames';
import { FC, useState } from 'react';

import {
  IconMonoCancel,
  IconMonoSearch,
  IconMonoVisibility,
  IconMonoVisibilityOff,
} from '@frontend/ui-icons-v2';

import { UIColor, UISize } from '../../../types';
import styles from './styles.module.scss';

export interface InputProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'search';
  name?: string;
  title?: string;
  value?: string;
  error?: string;
  disabled?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  autoFocus?: boolean;
  placeholder?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onChange?: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  color?: Exclude<UIColor, UIColor.special>;
  size?: Exclude<UISize, UISize.lg | UISize.xl>;
  classes?: Partial<
    Record<
      | 'root'
      | 'wrapper'
      | 'content'
      | 'type'
      | 'title'
      | 'error'
      | 'iconLeft'
      | 'iconRight'
      | 'maxLength',
      string
    >
  >;
}

export const Input: FC<InputProps> = ({
  type,
  name,
  title,
  value,
  error,
  disabled,
  readOnly,
  onChange,
  onKeyDown,
  iconLeft,
  iconRight,
  maxLength,
  autoFocus,
  placeholder,
  size = UISize.md,
  color = UIColor.primary,
  classes = {},
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const isSearch = type === 'search';
  const inputType = isPassword && showPassword ? 'text' : type;
  const length = value?.length || 0;

  const handleChange = (newValue: string) => {
    if (!maxLength || newValue.length <= maxLength) onChange?.(newValue);
  };

  const renderIcon = (icon: React.ReactNode, position: 'left' | 'right') => {
    const iconClass = cn(
      styles.input__icon,
      styles[`input__icon${position === 'left' ? 'Left' : 'Right'}`],
      classes.iconLeft,
      classes.iconRight,
    );

    if (position === 'left' && isSearch && !icon)
      return (
        <span className={iconClass}>
          <IconMonoSearch />
        </span>
      );
    if (position === 'right' && isSearch && !icon && value)
      return (
        <button type="button" className={iconClass} onClick={() => onChange?.('')}>
          <IconMonoCancel />
        </button>
      );
    if (!icon && (position === 'left' || (position === 'right' && !isPassword))) return null;

    return position === 'right' && isPassword ? (
      <button type="button" className={iconClass} onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <IconMonoVisibilityOff /> : <IconMonoVisibility />}
      </button>
    ) : icon ? (
      <span className={iconClass}>{position === 'left' ? iconLeft : iconRight}</span>
    ) : null;
  };

  return (
    <div
      className={cn(styles.input, styles.input + size, styles.input + color, classes.root)}
      data-id-component="input"
    >
      {error && <span className={cn(styles.input__error, classes.error)}>{error}</span>}
      <span className={cn(styles.input__wrapper, classes.wrapper)}>
        {renderIcon(iconLeft, 'left')}
        <span className={cn(styles.input__content, classes.content)}>
          <input
            className={cn(styles.input__type, classes.type)}
            type={inputType}
            value={value}
            placeholder={placeholder || title}
            maxLength={maxLength}
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={onKeyDown}
            disabled={disabled}
            readOnly={readOnly}
            name={name}
            autoFocus={autoFocus}
          />
          {title && !isSearch && (
            <span className={cn(styles.input__title, classes.title)}>{title}</span>
          )}
        </span>
        {renderIcon(iconRight, 'right')}
        {maxLength && (
          <span className={cn(styles.input__maxLength, classes.maxLength)}>
            {length} / {maxLength}
          </span>
        )}
      </span>
    </div>
  );
};
