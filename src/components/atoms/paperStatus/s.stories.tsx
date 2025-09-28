import type { Meta, StoryObj } from '@storybook/react';

import { PaperStatus, type PaperStatusProps } from './paperStatus';

const meta: Meta<PaperStatusProps> = {
  title: 'Components/Atoms/PaperStatus',
  component: PaperStatus as React.ComponentType<PaperStatusProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37318&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: { type: 'radio' },
      options: ['inactive', 'opened', 'downloaded', 'shared', 'shared_downloaded'],
      description: 'Status of the document',
      table: {
        type: {
          summary: "'inactive' | 'opened' | 'downloaded' | 'shared' | 'shared_downloaded'",
        },
        defaultValue: { summary: "'inactive'" },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Custom classes for styling',
      table: {
        type: { summary: 'Partial<Record<"root" | "item", string>>' },
      },
    },
  },
  args: {
    status: 'inactive',
    classes: {},
  },
};

export default meta;

type Story = StoryObj<PaperStatusProps>;

export const Default: Story = {
  args: { status: 'inactive' },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          padding: '1rem',
          backgroundColor: 'var(--blue-8)',
          borderRadius: 'var(--radius-md)',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        gap: '0.5rem',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: '1rem',
        backgroundColor: 'var(--blue-8)',
        borderRadius: 'var(--radius-md)',
      }}
    >
      <PaperStatus status="inactive" />
      <PaperStatus status="opened" />
      <PaperStatus status="downloaded" />
      <PaperStatus status="shared" />
      <PaperStatus status="shared_downloaded" />
    </div>
  ),
};
