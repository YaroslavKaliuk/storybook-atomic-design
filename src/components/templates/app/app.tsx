import cn from 'classnames';
import { FC, useEffect, useState } from 'react';

import { AppTypeContext, useDraggable } from '../../../hooks';
import { UIAppType } from '../../../types';
import { AppBar } from '../../molecules';
import styles from './styles.module.scss';

export interface AppProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  appType?: UIAppType;
}

export const App: FC<AppProps> = ({ children, appType, ...rest }) => {
  const [currentAppType, setCurrentAppType] = useState(appType);
  const [isVisible, setIsVisible] = useState(true);
  const { elementRef, dragHandleRef, initDrag } = useDraggable();

  useEffect(() => {
    const el = elementRef.current;
    if (el && currentAppType !== UIAppType.extension) {
      el.style.top = el.style.left = '';
    }
  }, [currentAppType]);

  if (!isVisible) return null;

  return (
    <div
      ref={elementRef}
      className={cn(styles.app, currentAppType)}
      data-id-component="app"
      {...rest}
    >
      {(currentAppType === UIAppType.extension || currentAppType === UIAppType.expanded) && (
        <AppBar
          classes={{ root: styles.app__appBar }}
          dragHandleRef={currentAppType === UIAppType.extension ? dragHandleRef : undefined}
          isFullscreen={currentAppType === UIAppType.expanded}
          onFullscreenChange={(isFullscreen) =>
            setCurrentAppType(isFullscreen ? UIAppType.expanded : UIAppType.extension)
          }
          onClose={() => setIsVisible(false)}
          onMount={currentAppType === UIAppType.extension ? initDrag : undefined}
        />
      )}
      <AppTypeContext.Provider value={currentAppType}>{children}</AppTypeContext.Provider>
    </div>
  );
};
