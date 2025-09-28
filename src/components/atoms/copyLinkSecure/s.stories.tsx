import type { Meta, StoryObj } from '@storybook/react';

import { UISize } from '../../../types';
import { CopyLinkSecure, type CopyLinkSecureProps } from './copyLinkSecure';

const meta: Meta<CopyLinkSecureProps> = {
  title: 'Components/Atoms/CopyLinkSecure',
  component: CopyLinkSecure as unknown as React.ComponentType<CopyLinkSecureProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37612&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Link to be copied',
      table: {
        type: { summary: 'string' },
      },
    },
    onCopy: {
      description: 'Callback function triggered after successful copy',
      table: {
        type: { summary: '() => void' },
      },
    },
    size: {
      control: 'radio',
      options: [UISize.sm, UISize.md],
      description: 'Component size',
      table: {
        type: { summary: 'Exclude<UISize, UISize.lg | UISize.xl>' },
        defaultValue: { summary: UISize.md },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the copy link secure',
      table: {
        type: { summary: 'String: {root, icon, title}' },
      },
    },
  },
  args: {
    size: UISize.md,
    title: 'plugins.copyLinkSecure.title',
    classes: {},
  },
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<CopyLinkSecureProps>;

export const Default: Story = {
  args: {
    title: 'plugins.copyLinkSecure.title',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default copy link component with icon and text.',
      },
    },
  },
};

export const WithCallback: Story = {
  args: {
    title: 'plugins.copyLinkSecure.title',
    onCopy: () => alert('Link copied!'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Copy link with callback function triggered after successful copy.',
      },
    },
  },
};

export const Small: Story = {
  args: {
    title: 'Copy secure upload link',
    size: UISize.sm,
  },
};
