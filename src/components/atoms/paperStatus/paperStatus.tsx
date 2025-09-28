import cn from 'classnames';
import { FC } from 'react';

import { IconMonoCheck, IconMonoDownload, IconMonoShare } from '@frontend/ui-icons-v2';

import styles from './styles.module.scss';

export interface PaperStatusProps {
  status: 'inactive' | 'opened' | 'downloaded' | 'shared' | 'shared_downloaded';
  classes?: Partial<Record<'root' | 'item', string>>;
}

export const PaperStatus: FC<PaperStatusProps> = ({ status, classes = {} }) => (
  <div className={cn(styles.paperStatus, classes.root)} data-id-component="paperStatus">
    {status === 'inactive' && <div className={cn(styles.paperStatus__item, classes.item)} />}
    {status === 'opened' && (
      <div className={cn(styles.paperStatus__item, classes.item)}>
        <IconMonoCheck />
      </div>
    )}
    {status === 'downloaded' && (
      <div className={cn(styles.paperStatus__item, classes.item)}>
        <IconMonoDownload />
      </div>
    )}
    {status === 'shared' && (
      <div className={cn(styles.paperStatus__item, classes.item)}>
        <IconMonoShare />
      </div>
    )}
    {status === 'shared_downloaded' && (
      <>
        <div className={cn(styles.paperStatus__item, classes.item)}>
          <IconMonoShare />
        </div>
        <div className={cn(styles.paperStatus__item, classes.item)}>
          <IconMonoDownload />
        </div>
      </>
    )}
  </div>
);
