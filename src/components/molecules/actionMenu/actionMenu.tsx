import cn from 'classnames';
import { FC } from 'react';

import { ActionMenuItem } from '../../atoms';
import styles from './styles.module.scss';

export interface ActionMenuItemData {
  id: string;
  title?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: () => void;
}

export interface ActionMenuProps {
  items: ActionMenuItemData[];
  classes?: Partial<Record<'root', string>>;
}

export const ActionMenu: FC<ActionMenuProps> = ({ items, classes = {} }) => (
  <div className={cn(styles.actionMenu, classes.root)} data-id-component="actionMenu">
    {items.map((item) => (
      <ActionMenuItem
        key={item.id}
        title={item.title}
        iconLeft={item.iconLeft}
        iconRight={item.iconRight}
        onClick={item.onClick}
        classes={{ root: styles.actionMenu__item, iconLeft: styles.actionMenu__icon }}
      />
    ))}
  </div>
);
