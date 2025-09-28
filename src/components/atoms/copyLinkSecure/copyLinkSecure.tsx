import cn from 'classnames';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { IconMonoCopyLinkSecure } from '@frontend/ui-icons-v2';

import { UISize } from '../../../types';
import styles from './styles.module.scss';

export interface CopyLinkSecureProps {
  title?: string;
  onCopy?: () => void;
  size?: Exclude<UISize, UISize.lg | UISize.xl>;
  classes?: Partial<Record<'root' | 'icon' | 'title', string>>;
}

export const CopyLinkSecure: FC<CopyLinkSecureProps> = ({
  title,
  onCopy,
  size = UISize.md,
  classes = {},
}) => {
  const { t } = useTranslation();

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(title);
      onCopy?.();
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  }, [title, onCopy]);

  return (
    <button
      className={cn(styles.copyLinkSecure, styles.copyLinkSecure + size, classes.root)}
      onClick={handleCopy}
      type="button"
      data-id-component="copyLinkSecure"
    >
      <span className={cn(styles.copyLinkSecure__icon, classes.icon)}>
        <IconMonoCopyLinkSecure />
      </span>
      <span className={cn(styles.copyLinkSecure__title, classes.title)}>
        {t('plugins.copyLinkSecure.title')}
      </span>
    </button>
  );
};
