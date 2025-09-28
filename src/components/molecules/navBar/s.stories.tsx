import type { Meta, StoryObj } from '@storybook/react';

import { NavBar, type NavBarProps } from './navBar';

const meta: Meta<NavBarProps> = {
  title: 'Components/Molecules/NavBar',
  component: NavBar as React.ComponentType<NavBarProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36688&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the navigation bar',
      table: {
        type: { summary: 'Partial<Record<"root", string>>' },
      },
    },
  },
  args: {
    classes: {},
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '22.5rem',
          overflow: 'hidden',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<NavBarProps>;

export const Default: Story = {
  render: (args) => <NavBar {...args} />,
};
