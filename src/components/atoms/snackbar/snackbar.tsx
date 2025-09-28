import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { UIColor } from '../../../types';
import styles from './styles.module.scss';

export interface SnackbarProps {
  color?: UIColor;
  message: string;
  buttonText?: string;
  buttonOnClick?: () => void;
  classes?: Partial<Record<'root' | 'message' | 'button', string>>;
}

export const Snackbar: FC<SnackbarProps> = ({
  color = UIColor.primary,
  message,
  buttonText,
  buttonOnClick,
  classes = {},
}) => {
  const { t } = useTranslation();
  return (
    <output
      className={cn(styles.snackbar, styles.snackbar + color, classes.root)}
      data-id-component="snackbar"
    >
      <div className={cn(styles.snackbar__message, classes.message)}>{message}</div>
      {buttonText && (
        <button className={cn(styles.snackbar__button, classes.button)} onClick={buttonOnClick}>
          {t(buttonText)}
        </button>
      )}
    </output>
  );
};
