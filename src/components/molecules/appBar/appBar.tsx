import cn from 'classnames';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
  IconMonoClose,
  IconMonoDragIndicator,
  IconMonoFullscreen,
  IconMonoFullscreenExit,
} from '@frontend/ui-icons-v2';

import { UIPlacement } from '../../../types';
import { Tooltip } from '../../atoms';
import styles from './styles.module.scss';

export interface AppBarProps {
  classes?: Partial<Record<'root' | 'buttonDrag' | 'buttonFullscreen' | 'buttonClose', string>>;
  dragHandleRef?: React.RefObject<HTMLButtonElement>;
  isFullscreen?: boolean;
  onMount?: () => void;
  onFullscreenChange?: (isFullscreen: boolean) => void;
  onClose?: () => void;
}

export const AppBar: FC<AppBarProps> = ({
  classes = {},
  dragHandleRef,
  isFullscreen = false,
  onMount,
  onFullscreenChange,
  onClose,
}) => {
  const { t } = useTranslation();

  useEffect(() => {
    onMount?.();
  }, [onMount]);

  const toggleFullscreen = () => {
    onFullscreenChange?.(!isFullscreen);
  };

  return (
    <div className={cn(styles.appBar, classes.root)} data-id-component="appBar">
      {!isFullscreen && (
        <Tooltip content={t('plugins.appBar.dragToMove')} placement={UIPlacement.top}>
          <button
            ref={dragHandleRef}
            className={cn(styles.appBar__button, styles.appBar__buttonDrag, classes.buttonDrag)}
          >
            <IconMonoDragIndicator />
          </button>
        </Tooltip>
      )}
      <Tooltip
        content={
          isFullscreen ? t('plugins.appBar.expandWidget') : t('plugins.appBar.collapseWidget')
        }
        placement={UIPlacement.top}
      >
        <button
          className={cn(
            styles.appBar__button,
            styles.appBar__buttonFullscreen,
            classes.buttonFullscreen,
          )}
          onClick={toggleFullscreen}
        >
          {isFullscreen ? <IconMonoFullscreenExit /> : <IconMonoFullscreen />}
        </button>
      </Tooltip>
      <Tooltip content={t('plugins.appBar.closeWidget')} placement={UIPlacement.top}>
        <button
          className={cn(styles.appBar__button, styles.appBar__buttonClose, classes.buttonClose)}
          onClick={onClose}
        >
          <IconMonoClose />
        </button>
      </Tooltip>
    </div>
  );
};
