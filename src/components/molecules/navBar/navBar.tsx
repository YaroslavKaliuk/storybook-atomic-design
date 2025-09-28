import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { IconMonoAccount, IconMonoBell, IconMonoHome, IconMonoUpload } from '@frontend/ui-icons-v2';

import { useAppType } from '../../../hooks';
import { UIAppType } from '../../../types';
import { NavBarItem } from '../../atoms/navBarItem/navBarItem';
import styles from './styles.module.scss';

export interface NavBarProps {
  classes?: Partial<Record<'root', string>>;
  appType?: UIAppType;
}

export const NavBar: FC<NavBarProps> = ({ classes = {}, appType }) => {
  const { t } = useTranslation();

  const contextAppType = useAppType();
  const currentAppType = contextAppType || appType;

  return (
    <nav className={cn(styles.navBar, currentAppType, classes.root)} data-id-component="navBar">
      <NavBarItem
        icon={<IconMonoHome />}
        title={t('plugins.navBar.myLibrary')}
        onClick={() => {}}
      />
      <NavBarItem
        icon={<IconMonoAccount />}
        title={t('plugins.navBar.profile')}
        onClick={() => {}}
      />
      <NavBarItem icon={<IconMonoUpload />} title={t('plugins.navBar.upload')} onClick={() => {}} />
      <NavBarItem
        icon={<IconMonoBell />}
        title={t('plugins.navBar.notifications')}
        onClick={() => {}}
      />
    </nav>
  );
};
