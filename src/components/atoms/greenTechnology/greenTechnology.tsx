import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { IconMonoLeaf } from '@frontend/ui-icons-v2';

import styles from './styles.module.scss';

export interface GreenTechnologyProps {
  classes?: Partial<Record<'root' | 'icon' | 'title', string>>;
}

export const GreenTechnology: FC<GreenTechnologyProps> = ({ classes = {} }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.greenTechnology, classes.root)} data-id-component="greenTechnology">
      <div className={cn(styles.greenTechnology__icon, classes.icon)}>
        <IconMonoLeaf />
      </div>
      <div className={cn(styles.greenTechnology__title, classes.title)}>
        {t('plugins.greenTechnology.title')}
      </div>
    </div>
  );
};
