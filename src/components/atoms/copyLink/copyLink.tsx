import cn from 'classnames';
import { FC, useCallback } from 'react';

import { IconMonoCopy } from '@frontend/ui-icons-v2';

import styles from './styles.module.scss';

export interface CopyLinkProps {
  title: string;
  onCopy?: () => void;
  classes?: Partial<Record<'root' | 'icon' | 'title', string>>;
}

export const CopyLink: FC<CopyLinkProps> = ({ title, onCopy, classes = {} }) => {
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
      className={cn(styles.copyLink, classes.root)}
      onClick={handleCopy}
      type="button"
      data-id-component="copyLink"
    >
      <span className={cn(styles.copyLink__icon, classes.icon)}>
        <IconMonoCopy />
      </span>
      <span className={cn(styles.copyLink__title, classes.title)}>{title}</span>
    </button>
  );
};
