import { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Modal, ModalBody, ModalFooter, ModalHeader, ModalMain, type ModalProps } from '.';
import { UIColor, UISize } from '../../../types/enums';
import { Button, Title } from '../../atoms';

const meta: Meta<ModalProps> = {
  title: 'Components/Molecules/Modal',
  component: Modal as React.ComponentType<ModalProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36305&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      description: 'Controls modal visibility',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },

    size: {
      options: [UISize.sm, UISize.md, UISize.lg, UISize.xl],
      control: { type: 'radio' },
      description: 'Modal size',
      table: {
        type: { summary: 'UISize' },
        defaultValue: { summary: 'UISize.md' },
      },
    },
    onClose: {
      action: 'closed',
      description:
        'Callback function when modal is closed. When provided to ModalHeader, shows close button',
      table: {
        type: { summary: '() => void' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the modal',
      table: {
        type: { summary: 'String: {root, body, header, main, footer}' },
      },
    },
  },
  args: {
    size: UISize.md,
    isOpen: true,
    classes: {},
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: 'grid',
            placeItems: 'center',
            width: '100%',
            minHeight: '16rem',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<ModalProps>;

const DefaultModal = ({ size, isOpen }: ModalProps) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      <Button title="Open Modal" onClick={() => setOpen(true)} />
      <Modal isOpen={open} size={size}>
        <ModalBody>
          {(onClose) => (
            <>
              <ModalHeader>
                <Title size={UISize.sm}>Title</Title>
              </ModalHeader>
              <ModalMain>
                This modal has no close button in header because onClose is not passed to
                ModalHeader.
              </ModalMain>
              <ModalFooter
                buttons={[
                  {
                    label: 'Cancel',
                    onClick: onClose,
                    variant: UIColor.primary,
                  },
                  {
                    label: 'Confirm',
                    onClick: onClose,
                    variant: UIColor.secondary,
                  },
                  {
                    label: 'Delete',
                    onClick: onClose,
                    variant: UIColor.special,
                  },
                ]}
              />
            </>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: (args) => <DefaultModal {...args} />,
  args: {
    size: UISize.md,
    isOpen: true,
  },
};

const WithCloseButtonModal = ({ size, isOpen }: ModalProps) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      <Button title="Open Modal" onClick={() => setOpen(true)} />
      <Modal isOpen={open} onClose={() => setOpen(false)} size={size}>
        <ModalBody>
          {(onClose) => (
            <>
              <ModalHeader onClose={onClose}>
                <Title size={UISize.sm}>Title with close button</Title>
              </ModalHeader>
              <ModalMain>
                This modal has close button in header because onClose is passed to ModalHeader.
              </ModalMain>
              <ModalFooter
                buttons={[
                  {
                    label: 'Cancel',
                    onClick: () => setOpen(false),
                    variant: UIColor.primary,
                  },
                ]}
              />
            </>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export const WithCloseButton: Story = {
  render: (args) => <WithCloseButtonModal {...args} />,
  args: {
    size: UISize.md,
    isOpen: true,
  },
};
