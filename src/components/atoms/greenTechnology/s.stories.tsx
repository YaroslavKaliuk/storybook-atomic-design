import type { Meta, StoryObj } from '@storybook/react';

import { GreenTechnology, type GreenTechnologyProps } from './greenTechnology';

const meta: Meta<GreenTechnologyProps> = {
  title: 'Components/Atoms/GreenTechnology',
  component: GreenTechnology as React.ComponentType<GreenTechnologyProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36859&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the component',
      table: {
        type: { summary: 'String: {root, icon, title}' },
      },
    },
  },
  args: {
    classes: {},
  },
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<GreenTechnologyProps>;

export const Default: Story = {
  render: (args) => <GreenTechnology {...args} />,
};
