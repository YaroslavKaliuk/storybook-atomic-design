import { Meta, StoryObj } from '@storybook/react';

import avatarImage from '../../atoms/avatar/avatar.png';
import { GPSStatusItem } from './gpsStatusItem';

const meta: Meta<typeof GPSStatusItem> = {
  title: 'Components/Molecules/GPSStatusItem',
  component: GPSStatusItem,
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
    status: { control: 'radio', options: ['viewed', 'shared'] },
    time: { control: 'text' },
    avatarImage: { control: 'text' },
    sharedWith: {
      control: 'text',
    },
    userName: { control: 'text' },
    userEmail: {
      control: 'text',
    },
    userInitials: {
      control: 'text',
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the gpsStatusItem',
      table: {
        type: { summary: 'String: {root, top, status, time, content, avatar, info, userEmail}' },
      },
    },
  },
  args: {
    status: 'viewed',
    time: '02:25 PM',
    avatarImage,
    sharedWith: 'Timothy Smith',
    userName: 'John Doe',
    userEmail: 'john.doe@example.com',
    userInitials: 'JD',
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

type Story = StoryObj<typeof GPSStatusItem>;

export const Default: Story = {
  render: (args) => <GPSStatusItem {...args} />,
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <GPSStatusItem
        avatarImage={avatarImage}
        userInitials="JD"
        status="viewed"
        time="02:25 PM"
        userName="John Doe"
        userEmail="john.doe@example.com"
      />
      <GPSStatusItem
        avatarImage={avatarImage}
        userInitials="JD"
        status="shared"
        sharedWith="Timothy Smith"
        userName="John Doe"
        time="01:15 PM"
        userEmail="john.doe@example.com, john.doe@example.com"
      />
    </div>
  ),
};
