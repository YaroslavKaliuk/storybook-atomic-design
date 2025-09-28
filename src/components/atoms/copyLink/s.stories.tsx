import type { Meta, StoryObj } from '@storybook/react';

import { CopyLink, type CopyLinkProps } from './copyLink';

const meta: Meta<CopyLinkProps> = {
  title: 'Components/Atoms/CopyLink',
  component: CopyLink as React.ComponentType<CopyLinkProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=3594-7908&t=s9IlRjdegsE5NxJ3-0" target="_blank"><b>Figma Design</b></a>',
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
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the copy link',
      table: {
        type: { summary: 'String: {root, icon, title}' },
      },
    },
  },
  args: {
    title: 'https://app.dev.shelterzoom.com/paper-view/66d8541209202fa9abc9d161?',
    classes: {},
  },
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<CopyLinkProps>;

export const Default: Story = {
  args: {
    title: 'https://app.dev.shelterzoom.com/paper-view/66d8541209202fa9abc9d161?',
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
    title: 'https://app.dev.shelterzoom.com/paper-view/66d8541209202fa9abc9d161?',
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
