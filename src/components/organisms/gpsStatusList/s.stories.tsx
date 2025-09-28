import type { Meta, StoryObj } from '@storybook/react';

import avatarImage from '../../atoms/avatar/avatar.png';
import { GPSStatusList, GPSStatusListProps } from './gpsStatusList';

const meta: Meta<GPSStatusListProps> = {
  title: 'Components/Organisms/GPSStatusList',
  component: GPSStatusList as React.ComponentType<GPSStatusListProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37105&t=8Efd59bFNSVtobqO-4" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the gpsStatusList',
      table: { type: { summary: 'String: {root, documentName, content, date, items, empty}' } },
    },
  },
  args: {
    documentName: 'GPUser.docx',
    items: [
      {
        id: '1',
        status: 'viewed',
        time: '02:25 PM',
        date: new Date(),
        avatarImage,
        sharedWith: '',
        userName: 'User Name',
        userEmail: 'user@example.com',
        userInitials: 'UN',
      },
    ],
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

type Story = StoryObj<GPSStatusListProps>;

export const Default: Story = {
  args: {
    items: [
      {
        id: '1',
        status: 'viewed',
        time: '02:25 PM',
        date: new Date(),
        avatarImage,
        sharedWith: '',
        userName: 'User Name',
        userEmail: 'user@example.com',
        userInitials: 'UN',
      },
      {
        id: '2',
        status: 'shared',
        time: '01:15 PM',
        date: new Date(),
        avatarImage,
        sharedWith: 'user2@example.com',
        userName: 'UserName',
        userEmail: 'user@example.com user2@example.com',
        userInitials: 'UN',
      },
      {
        id: '3',
        status: 'viewed',
        time: '09:30 AM',
        date: new Date(Date.now() - 86400000),
        avatarImage,
        sharedWith: '',
        userName: 'Yesterday User',
        userEmail: 'yesterday@example.com',
        userInitials: 'YU',
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};
