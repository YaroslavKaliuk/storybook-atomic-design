import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

export interface SeparatorProps {
  classes?: Partial<Record<'root', string>>;
}

export const Separator: FC<SeparatorProps> = ({ classes = {} }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.separator, classes.root)} data-id-component="separator">
      {t('plugins.separator.or')}
    </div>
  );
};
