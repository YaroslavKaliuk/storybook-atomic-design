import type { Meta, StoryObj } from '@storybook/react';

import { ModalAddEtag } from './modalAddEtag';

export interface ModalAddEtagProps {
  isOpen?: boolean;
  onClose?: () => void;
  classes?: Partial<Record<'root', string>>;
}

const meta: Meta<ModalAddEtagProps> = {
  title: 'Components/Organisms/ModalAddEtag',
  component: ModalAddEtag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37177&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the component',
      table: { type: { summary: 'String: {root}' } },
    },
    isOpen: {
      control: { type: 'boolean' },
      description: 'Controls modal visibility',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClose: {
      action: 'closed',
      description: 'Callback function when modal is closed',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
  args: {
    isOpen: true,
    classes: {},
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', minWidth: '40rem', minHeight: '40rem', position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<ModalAddEtagProps>;

export const Default: Story = {
  render: (args) => <ModalAddEtag {...args} />,
  parameters: {
    docs: {},
  },
};
