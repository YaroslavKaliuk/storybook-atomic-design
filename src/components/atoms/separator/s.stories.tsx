import type { Meta, StoryObj } from '@storybook/react';

import { Separator, type SeparatorProps } from './separator';

const meta: Meta<SeparatorProps> = {
  title: 'Components/Atoms/Separator',
  component: Separator as React.ComponentType<SeparatorProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36226&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the separator',
      table: {
        type: { summary: 'String: {root}' },
      },
    },
  },
  args: {
    classes: {},
  },
  decorators: [
    (Story) => (
      <div style={{ width: '22.5rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<SeparatorProps>;

export const Default: Story = {
  render: (args) => <Separator {...args} />,
};
