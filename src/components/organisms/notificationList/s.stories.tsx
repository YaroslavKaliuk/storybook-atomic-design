import type { Meta, StoryObj } from '@storybook/react';

import avatarImage from '../../atoms/avatar/avatar.png';
import { NotificationList, type NotificationListProps } from './notificationList';

const mockNotifications = [
  {
    id: '1',
    fileName: 'Presentation.pptx',
    userName: 'Jennifer Johnson',
    time: '9/16/2023, 2:39:59 PM',
    avatarImage: avatarImage,
    userInitials: 'JJ',
    onFileClick: (fileUrl: string) => {},
  },
  {
    id: '2',
    fileName: 'Report.pdf',
    userName: 'Michael Smith',
    time: '9/15/2023, 10:15:30 AM',
    avatarImage: avatarImage,
    userInitials: 'MS',
    onFileClick: (fileUrl: string) => {},
  },
  {
    id: '3',
    fileName: 'Budget.xlsx',
    userName: 'Sarah Wilson',
    time: '9/14/2023, 4:22:15 PM',
    avatarImage: avatarImage,
    userInitials: 'SW',
    onFileClick: (fileUrl: string) => {},
  },
];

const meta: Meta<NotificationListProps> = {
  title: 'Components/Organisms/NotificationList',
  component: NotificationList as React.ComponentType<NotificationListProps>,
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
    notifications: {
      control: { type: 'object' },
      description: 'Array of notification data',
      table: {
        type: { summary: 'NotificationData[]' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the notification list',
      table: {
        type: { summary: 'Partial<Record<"root" | "empty", string>>' },
      },
    },
  },
  args: {
    notifications: mockNotifications,
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

type Story = StoryObj<NotificationListProps>;

export const Default: Story = {
  render: (args) => <NotificationList {...args} />,
};

export const Empty: Story = {
  args: {
    notifications: [],
  },
};
