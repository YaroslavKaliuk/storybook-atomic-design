import type { Meta, StoryObj } from '@storybook/react';

import { UIColor, UISize } from '../../../types';
import { Etag, type EtagProps } from './etag';

const meta: Meta<EtagProps> = {
  title: 'Components/Atoms/Etag',
  component: Etag as React.ComponentType<EtagProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37077&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Etag text content',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Etag' },
      },
    },
    size: {
      options: [UISize.sm, UISize.md],
      control: { type: 'radio' },
      description: 'Etag size variant',
      table: {
        type: { summary: 'UISize.sm | UISize.md' },
        defaultValue: { summary: 'UISize.md' },
      },
    },
    color: {
      options: [UIColor.primary, UIColor.secondary, UIColor.special],
      control: { type: 'radio' },
      description: 'Etag color variant',
      table: {
        type: { summary: 'UIColor' },
        defaultValue: { summary: 'UIColor.primary' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable (automatically removed when isAdd or isRemove is true)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    isAdd: {
      control: { type: 'boolean' },
      description: 'Show add icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isRemove: {
      control: { type: 'boolean' },
      description: 'Show remove icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the etag',
      table: {
        type: { summary: 'String: {root, icon, title}' },
      },
    },
  },
  args: {
    title: 'Etag',
    size: UISize.md,
    color: UIColor.primary,
    disabled: true,
    isAdd: false,
    isRemove: false,
    classes: {},
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            padding: '1rem',
            backgroundColor: 'var(--blue-8)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<EtagProps>;

export const Default: Story = {
  render: (args) => <Etag {...args} />,
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        alignItems: 'center',
        justifyItems: 'center',
        width: '22.5rem',
      }}
    >
      <Etag
        title="Long etag text that should demonstrate text overflow behavior"
        size={UISize.md}
      />
      <Etag title="Add" isAdd />
      <Etag title="Remove" isRemove />
      <Etag title="Primary" color={UIColor.primary} />
      <Etag title="Secondary" color={UIColor.secondary} />
      <Etag title="Special" color={UIColor.special} />
      <Etag title="Small" size={UISize.sm} />
      <Etag title="Medium" size={UISize.md} />
    </div>
  ),
};
