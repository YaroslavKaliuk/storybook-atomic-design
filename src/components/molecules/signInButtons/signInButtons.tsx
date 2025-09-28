import cn from 'classnames';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { UIColor, UISize } from '../../../types';
import { Button } from '../../atoms/button';
import styles from './styles.module.scss';

export interface SignInButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  iconLeft?: ReactNode;
  color?: UIColor;
  classes?: Partial<Record<'root', string>>;
}

export interface SignInButtonsProps {
  buttons: SignInButtonProps[];
  classes?: Partial<Record<'root', string>>;
}

export const SignInButtons: FC<SignInButtonsProps> = ({ buttons, classes = {} }) => {
  return (
    <div className={cn(styles.signInButtons, classes.root)} data-id-component="signInButtons">
      {buttons.map((buttonProps, index) => (
        <Button
          key={index}
          size={UISize.sm}
          classes={{ root: styles.signInButtons__button, icon: styles.signInButtons__icon }}
          {...buttonProps}
        />
      ))}
    </div>
  );
};
