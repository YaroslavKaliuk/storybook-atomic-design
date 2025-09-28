import cn from 'classnames';
import { ComponentPropsWithoutRef, FC } from 'react';

import styles from './styles.module.scss';

export interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  classes?: Partial<Record<'root' | 'textarea', string>>;
}

export const Textarea: FC<TextareaProps> = ({ disabled, placeholder, classes = {}, ...props }) => (
  <label className={cn(styles.textarea, classes.root)} data-id-component="textarea">
    <textarea
      className={cn(styles.textarea__textarea, classes.textarea)}
      placeholder={placeholder}
      disabled={disabled}
      {...props}
    />
  </label>
);
