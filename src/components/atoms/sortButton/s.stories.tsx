import type { Meta, StoryObj } from '@storybook/react';

import { SortButton, type SortButtonProps } from './sortButton';

const meta: Meta<SortButtonProps> = {
  title: 'Components/Atoms/SortButton',
  component: SortButton as React.ComponentType<SortButtonProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36885&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Sort button text content',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Sort by' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the sort component',
      table: {
        type: { summary: 'String: {root, title, icon}' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler for the sort component',
      table: {
        type: { summary: '() => void' },
      },
    },
    isActive: {
      control: { type: 'boolean' },
      description: 'Whether the sort component is active',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    title: 'Sort by',
    classes: {},
    isActive: false,
    onClick: () => {},
  },
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<SortButtonProps>;

export const Default: Story = {
  render: (args) => <SortButton {...args} />,
};
