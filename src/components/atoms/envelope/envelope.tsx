import cn from 'classnames';
import { FC } from 'react';

import { IconMultiEnvelope } from '@frontend/ui-icons-v2';

import styles from './styles.module.scss';

export interface EnvelopeProps {
  hashtag: string;
  count: number;
  classes?: Partial<Record<'root' | 'hashtag' | 'icon' | 'count', string>>;
}

export const Envelope: FC<EnvelopeProps> = ({ hashtag, count, classes = {} }) => (
  <button className={cn(styles.envelope, classes.root)} data-id-component="envelope" type="button">
    <span className={cn(styles.envelope__hashtag, classes.hashtag)}># {hashtag}</span>
    <span className={cn(styles.envelope__icon, classes.icon)}>
      <IconMultiEnvelope />
    </span>
    {count && <span className={cn(styles.envelope__count, classes.count)}>{count}</span>}
  </button>
);
