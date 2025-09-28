import cn from 'classnames';
import { FC } from 'react';

import { IconMonoClip, IconMultiLogoDocumentGPS } from '@frontend/ui-icons-v2';

import { UISize } from '../../../types';
import styles from './styles.module.scss';

export interface LogoProps {
  classes?: Partial<Record<'root', string>>;
  size?: Exclude<UISize, UISize.xl>;
}

export const Logo: FC<LogoProps> = ({ classes = {}, size = UISize.md }) => (
  <div className={cn(styles.logo, classes.root, styles.logo + size)} data-id-component="logo">
    {size === UISize.sm ? (
      <IconMonoClip />
    ) : size === UISize.md || size === UISize.lg ? (
      <IconMultiLogoDocumentGPS />
    ) : null}
  </div>
);
