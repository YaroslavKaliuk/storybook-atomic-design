import type { Meta, StoryObj } from '@storybook/react';

import { Loader, type LoaderProps } from './loader';

const meta: Meta<LoaderProps> = {
  title: 'Components/Atoms/Loader',
  component: Loader as React.ComponentType<LoaderProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36942&t=YfAtbcku84RABd2c-4" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the loader',
      table: {
        type: { summary: 'String: {root}' },
      },
    },
  },
  args: { classes: {} },
  decorators: [
    (Story) => (
      <div style={{ width: '22.5rem', height: '10rem', position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<LoaderProps>;

export const Default: Story = {};
