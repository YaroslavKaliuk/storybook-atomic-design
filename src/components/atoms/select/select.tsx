import cn from 'classnames';
import { ComponentPropsWithoutRef, FC, useEffect, useRef, useState } from 'react';

import { IconMonoCaretDown } from '@frontend/ui-icons-v2';

import styles from './styles.module.scss';

export interface SelectProps extends Omit<ComponentPropsWithoutRef<'input'>, 'onChange'> {
  dropdown: { value: string }[];
  isFilter?: boolean;
  placeholder?: string;
  onChange: (value: string) => void;
  classes?: Partial<
    Record<'root' | 'selected' | 'dropdown' | 'dropdownScroll' | 'dropdownItem' | 'icon', string>
  >;
}

export const Select: FC<SelectProps> = ({
  dropdown,
  placeholder,
  onChange,
  isFilter,
  disabled,
  classes = {},
  ...props
}) => {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', outside);
    return () => document.removeEventListener('mousedown', outside);
  }, []);

  const handleClickItem = (val: string) => {
    setValue(val);
    onChange(val);
    setIsOpen(false);
    setIsTyping(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    onChange(val);
    setIsTyping(true);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    setIsTyping(false);
  };

  const options =
    isFilter && isTyping
      ? dropdown.filter((o) => o.value.toLowerCase().includes(value.toLowerCase()))
      : dropdown;

  return (
    <div
      ref={ref}
      className={cn(
        styles.select,
        isOpen && styles.select__isOpen,
        isFilter && styles.select__isFilter,
        classes.root,
      )}
      data-id-component="select"
    >
      <div className={cn(styles.select__selected, classes.selected)} onClick={toggleDropdown}>
        <input
          {...props}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
        <span className={cn(styles.select__icon, classes.icon)}>
          <IconMonoCaretDown />
        </span>
      </div>

      {isOpen && (
        <div className={cn(styles.select__dropdown, classes.dropdown)}>
          <div className={cn(styles.select__dropdownScroll, classes.dropdownScroll)}>
            {options.map((opt) => (
              <div
                key={opt.value}
                className={cn(styles.select__dropdownItem, classes.dropdownItem)}
                onClick={() => handleClickItem(opt.value)}
              >
                {opt.value}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
