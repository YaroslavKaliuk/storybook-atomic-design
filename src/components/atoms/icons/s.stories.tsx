import type { Meta, StoryObj } from '@storybook/react';

import { Icons } from './icons';

const meta: Meta<typeof Icons> = {
  title: 'Common/Icons',
  component: Icons,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
