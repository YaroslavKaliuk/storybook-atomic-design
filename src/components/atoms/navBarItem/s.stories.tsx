import { IconMonoHome } from '@frontend/ui-icons-v2';
import type { Meta, StoryObj } from '@storybook/react';

import { NavBarItem, type NavBarItemProps } from './navBarItem';

const meta: Meta<NavBarItemProps> = {
  title: 'Components/Atoms/NavBarItem',
  component: NavBarItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36750&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Navigation item title',
      table: {
        type: { summary: 'string' },
      },
    },
    icon: {
      control: { type: 'object' },
      description: 'Icon element to display',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    isActive: {
      control: { type: 'boolean' },
      description: 'Whether the item is active',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback function when item is clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Custom CSS classes for root, icon, and title',
      table: {
        type: { summary: 'Partial<Record<"root" | "icon" | "title", string>>' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    title: 'My Library',
    isActive: false,
    disabled: false,
    onClick: () => {},
    icon: <IconMonoHome />,
    classes: {},
  },
};

export default meta;

type Story = StoryObj<NavBarItemProps>;

export const Default: Story = {};
