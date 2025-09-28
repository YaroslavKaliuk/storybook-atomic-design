import type { Meta, StoryObj } from '@storybook/react';

import { Colors } from './colors';

const meta: Meta<typeof Colors> = {
  title: 'Common/Colors',
  component: Colors as React.ComponentType<typeof Colors>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=201-7657&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
