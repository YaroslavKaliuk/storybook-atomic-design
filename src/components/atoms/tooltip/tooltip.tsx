import cn from 'classnames';
import { cloneElement, FC, isValidElement, PropsWithChildren } from 'react';

import { UIPlacement } from '../../../types';
import styles from './styles.module.scss';

const MAX_LENGTH = 30;

export interface TooltipProps {
  content: string;
  placement?: Exclude<UIPlacement, UIPlacement.center>;
  classes?: Partial<Record<'root', string>>;
}

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  children,
  content,
  placement = UIPlacement.bottom,
  classes = {},
}) => {
  const isLong = content.length > MAX_LENGTH;

  if (!isValidElement(children)) return children;

  const element = children as React.ReactElement;
  const isSvg =
    typeof element.type === 'function' &&
    'name' in element.type &&
    typeof element.type.name === 'string' &&
    element.type.name.toLowerCase().includes('svg');

  const props = {
    'data-tooltip': content,
    'data-tooltip-placement': placement,
    ...(isLong && { 'data-tooltip-long': '' }),
  };

  return isSvg ? (
    <div className={cn(styles.tooltip, classes.root)} {...props} data-id-component="tooltip">
      {children}
    </div>
  ) : (
    cloneElement(element, Object.assign({}, element.props, props))
  );
};
