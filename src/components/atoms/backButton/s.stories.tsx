import type { Meta, StoryObj } from '@storybook/react';

import { BackButton, type BackButtonProps } from './backButton';

const meta: Meta<BackButtonProps> = {
  title: 'Components/Atoms/BackButton',
  component: BackButton as React.ComponentType<BackButtonProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36209&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the back button',
      table: {
        type: { summary: 'Partial<Record<"root", string>>' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler for the back button',
      table: {
        type: { summary: '(event: MouseEvent<HTMLButtonElement>) => void' },
      },
    },
  },
  args: {
    classes: {},
  },
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<BackButtonProps>;

export const Default: Story = {
  render: (args) => <BackButton {...args} />,
};
