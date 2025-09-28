import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { UIColor, UISize } from '../../../types/enums';
import { Button, Title } from '../../atoms';
import { AddEtag, Modal, ModalBody, ModalFooter, ModalHeader, ModalMain } from '../../molecules';
import styles from './styles.module.scss';

export interface ModalAddEtagProps {
  isOpen?: boolean;
  onClose?: () => void;
  classes?: Partial<Record<'root', string>>;
}
export const ModalAddEtag: FC<ModalAddEtagProps> = ({ isOpen = false, onClose, classes = {} }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.modalAddEtag)} data-id-component="modalAddEtag">
      <Modal isOpen={isOpen} onClose={onClose} size={UISize.md}>
        <ModalBody>
          {(onClose) => (
            <>
              <ModalHeader onClose={onClose}>
                <Title>{t('plugins.modalAddEtag.title')}</Title>
              </ModalHeader>
              <ModalMain>
                <AddEtag />
              </ModalMain>
              <ModalFooter>
                <Button
                  title={t('plugins.modalAddEtag.apply')}
                  onClick={onClose}
                  color={UIColor.special}
                  classes={{ root: styles.modalAddEtag__button }}
                />
              </ModalFooter>
            </>
          )}
        </ModalBody>
      </Modal>
    </div>
  );
};
