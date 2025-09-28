import type { Meta, StoryObj } from '@storybook/react';

import avatarImage from '../../atoms/avatar/avatar.png';
import { NotificationItem, type NotificationItemProps } from './notificationItem';

const meta: Meta<NotificationItemProps> = {
  title: 'Components/Molecules/NotificationItem',
  component: NotificationItem as React.ComponentType<NotificationItemProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36934&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    fileName: {
      control: { type: 'text' },
      description: 'Name of the file',
      table: {
        type: { summary: 'string' },
      },
    },
    userName: {
      control: { type: 'text' },
      description: 'Name of the user who sent the invitation',
      table: {
        type: { summary: 'string' },
      },
    },
    time: {
      control: { type: 'text' },
      description: 'ISO string timestamp of the notification',
      table: {
        type: { summary: 'string' },
      },
    },
    onFileClick: {
      action: 'file clicked',
      description: 'Callback function to handle file click',
      table: {
        type: { summary: 'function' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the notification item',
      table: {
        type: {
          summary:
            'Partial<Record<"root" | "avatar" | "content" | "info" | "userName" | "text" | "fileName" | "time", string>>',
        },
      },
    },
  },
  args: {
    fileName: 'Presentation.pptx',
    userName: 'Jennifer Johnson',
    time: '9/16/2023, 2:39:59 PM',
    avatarImage: avatarImage,
    userInitials: 'JJ',
    onFileClick: () => {},
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

type Story = StoryObj<NotificationItemProps>;

export const Default: Story = {
  render: (args) => <NotificationItem {...args} />,
};
