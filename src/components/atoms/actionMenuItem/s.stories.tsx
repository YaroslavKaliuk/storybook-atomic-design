import {
  IconMonoAdd,
  IconMonoChevronRight,
  IconMonoDelete,
  IconMonoEdit,
  IconMonoSignature,
} from '@frontend/ui-icons-v2';
import type { Meta, StoryObj } from '@storybook/react';

import { ActionMenuItem, type ActionMenuItemProps } from './actionMenuItem';

const meta: Meta<ActionMenuItemProps> = {
  title: 'Components/Atoms/ActionMenuItem',
  component: ActionMenuItem as React.ComponentType<ActionMenuItemProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=4163-53990&t=WZfQLbkqFU1WcMXV-4" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Menu item title text',
      table: { type: { summary: 'string' } },
    },
    iconLeft: {
      control: { type: 'object' },
      description: 'Icon to display on the left side',
      table: { type: { summary: 'React.ReactNode' } },
    },
    iconRight: {
      control: { type: 'object' },
      description: 'Icon to display on the right side',
      table: { type: { summary: 'React.ReactNode' } },
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
      table: { type: { summary: '() => void' } },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the action menu item',
      table: {
        type: { summary: 'Partial<Record<"root" | "iconLeft" | "iconRight" | "title", string>>' },
      },
    },
  },
  args: {
    title: 'e-Signature',
    onClick: () => {},
    classes: {},
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', width: '22.5rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<ActionMenuItemProps>;

export const Default: Story = {
  args: {
    iconLeft: <IconMonoSignature />,
    iconRight: <IconMonoChevronRight />,
  },
};
