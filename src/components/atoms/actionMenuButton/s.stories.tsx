import type { Meta, StoryObj } from '@storybook/react';

import { ActionMenuButton, type ActionMenuButtonProps } from './actionMenuButton';

const meta: Meta<ActionMenuButtonProps> = {
  title: 'Components/Atoms/ActionMenuButton',
  component: ActionMenuButton as React.ComponentType<ActionMenuButtonProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37309&t=XQqDUf0lx6RDdVIa-4" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'Click handler',
      table: { type: { summary: '() => void' } },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the action menu button',
      table: {
        type: { summary: 'Partial<Record<"root", string>>' },
      },
    },
  },
  args: {
    onClick: () => {},
    classes: {},
  },
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<ActionMenuButtonProps>;

export const Default: Story = {
  render: (args) => <ActionMenuButton {...args} />,
};
