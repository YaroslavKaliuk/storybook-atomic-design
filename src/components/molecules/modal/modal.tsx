import cn from 'classnames';
import { createContext, FC, ReactNode, useCallback, useContext, useEffect, useState } from 'react';

import { IconMonoClose } from '@frontend/ui-icons-v2';

import { UIColor, UISize } from '../../../types';
import styles from './styles.module.scss';

interface ModalContextType {
  closeWithAnimation: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Modal components must be used within Modal');
  }
  return context;
};

export interface ModalProps {
  isOpen?: boolean;
  children: ReactNode;
  onClose?: () => void;
  size?: UISize;
  classes?: Partial<Record<'root' | 'body' | 'header' | 'main' | 'footer', string>>;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  children,
  onClose,
  size = UISize.md,
  classes = {},
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget && onClose) {
        setIsClosing(true);
        onClose();
      }
    },
    [onClose],
  );

  const closeWithAnimation = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setIsClosing(false);
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [isClosing]);

  if (!isOpen && !isClosing) return null;

  return (
    <ModalContext.Provider value={{ closeWithAnimation }}>
      <div
        className={cn(styles.modal, styles.modal + size, classes.root)}
        onClick={handleBackdropClick}
        data-close={isClosing ? '' : undefined}
        data-id-component="modal"
      >
        {children}
      </div>
    </ModalContext.Provider>
  );
};

export interface ModalBodyProps {
  children: (onClose: () => void) => ReactNode;
  onClose?: () => void;
  classes?: Partial<Record<'body', string>>;
}

export const ModalBody: FC<ModalBodyProps> = ({ children, onClose, classes = {} }) => (
  <div className={cn(styles.modal__body, classes.body)}>{children(() => onClose?.())}</div>
);

export interface ModalHeaderProps {
  children: ReactNode;
  onClose?: () => void;
  classes?: Partial<Record<'header' | 'close', string>>;
}

export const ModalHeader: FC<ModalHeaderProps> = ({ children, onClose, classes = {} }) => {
  const { closeWithAnimation } = useModalContext();

  return (
    <div className={cn(styles.modal__header, classes.header)}>
      {children}
      {onClose && (
        <button
          className={cn(styles.modal__close, classes.close)}
          onClick={closeWithAnimation}
          type="button"
        >
          <IconMonoClose />
        </button>
      )}
    </div>
  );
};

export interface ModalMainProps {
  children: ReactNode;
  classes?: Partial<Record<'main', string>>;
}

export const ModalMain: FC<ModalMainProps> = ({ children, classes = {} }) => (
  <div className={cn(styles.modal__main, classes.main)}>{children}</div>
);

export interface ModalFooterProps {
  children?: ReactNode;
  buttons?: Array<{
    label: string;
    onClick?: () => void;
    variant?: UIColor;
  }>;
  classes?: Partial<Record<'button' | 'footer', string>>;
}

const buttonVariantStyles = {
  [UIColor.primary]: styles.modal__buttonPrimary,
  [UIColor.special]: styles.modal__buttonSpecial,
  [UIColor.secondary]: styles.modal__buttonSecondary,
} as const;

export const ModalFooter: FC<ModalFooterProps> = ({ children, buttons = [], classes = {} }) => {
  const { closeWithAnimation } = useModalContext();

  return (
    <div className={cn(styles.modal__footer, classes.footer)}>
      {children}
      {buttons.map(({ label, onClick, variant }) => (
        <button
          key={label}
          onClick={() => {
            onClick?.();
            closeWithAnimation();
          }}
          className={cn(
            styles.modal__button,
            variant && buttonVariantStyles[variant],
            classes.button,
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
