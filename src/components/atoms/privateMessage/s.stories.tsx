import type { Meta, StoryObj } from '@storybook/react';

import { UIColor, UISize } from '../../../types';
import { Avatar } from '../avatar';
import avatarImage from '../avatar/avatar.png';
import { PrivateMessage, type PrivateMessageProps } from './privateMessage';

const meta: Meta<PrivateMessageProps> = {
  title: 'Components/Atoms/PrivateMessage',
  component: PrivateMessage as React.ComponentType<PrivateMessageProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36990&t=soOUYrXPdQi41gl1-4" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: [UIColor.primary, UIColor.secondary],
      control: { type: 'radio' },
      description: 'Message colors',
      table: {
        type: { summary: 'Exclude<UIColor, UIColor.special>' },
        defaultValue: { summary: UIColor.primary },
      },
    },
    title: {
      control: { type: 'text' },
      description: 'Message title',
      table: {
        type: { summary: 'string' },
      },
    },
    content: {
      control: { type: 'text' },
      description: 'Message content',
      table: {
        type: { summary: 'string' },
      },
    },
    avatar: {
      control: { type: 'select' },
      description: 'Avatar component to display',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the private message',
      table: {
        type: { summary: 'String: {root, header, main, content, avatar, title, icon}' },
      },
    },
  },
  args: {
    color: UIColor.primary,
    title: 'Private message',
    content: 'Private short message added by the author to this document',
    avatar: <Avatar imgSrc={avatarImage} userInitials="YK" size={UISize.sm} />,
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

type Story = StoryObj<PrivateMessageProps>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <PrivateMessage {...args} title="Default" />
      <PrivateMessage {...args} title="Secondary" color={UIColor.secondary} />
      <PrivateMessage {...args} title="Without avatar" avatar={undefined} />
      <PrivateMessage
        {...args}
        title="Long content"
        content="This is a very long private message that demonstrates how the component handles longer content. It includes multiple sentences and shows the expandable nature of the component. The content will be hidden by default and can be revealed by clicking on the header."
      />
    </div>
  ),
};
