import cn from 'classnames';
import { FC } from 'react';

import { IconMonoKey } from '@frontend/ui-icons-v2';

import { UIColor } from '../../../types';
import styles from './styles.module.scss';

export interface TokenIDProps {
  tokenId: string;
  onClick: () => void;
  color?: Exclude<UIColor, UIColor.special>;
  classes?: Partial<Record<'root' | 'icon' | 'id', string>>;
}

export const TokenID: FC<TokenIDProps> = ({
  tokenId,
  onClick,
  color = UIColor.primary,
  classes = {},
}) => (
  <button
    className={cn(styles.tokenID, styles.tokenID + color, classes.root)}
    data-id-component="tokenID"
    type="button"
    onClick={onClick}
  >
    <span className={cn(styles.tokenID__icon, classes.icon)}>
      <IconMonoKey />
    </span>
    <span className={cn(styles.tokenID__id, classes.id)}>{tokenId}</span>
  </button>
);
