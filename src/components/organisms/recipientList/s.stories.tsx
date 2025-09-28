import type { Meta, StoryObj } from '@storybook/react';

import avatarImage from '../../atoms/avatar/avatar.png';
import { RecipientList, RecipientListProps } from './recipientList';

const meta: Meta<RecipientListProps> = {
  title: 'Components/Organisms/RecipientList',
  component: RecipientList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37140&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    recipients: {
      control: { type: 'object' },
      description: 'Array of recipient data',
      table: {
        type: { summary: 'RecipientData[]' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the component',
      table: {
        type: { summary: 'String: {root}' },
      },
    },
  },
  args: {
    recipients: [
      {
        id: '1',
        email: 'john.doe@example.com',
        avatarImage,
        userInitials: 'JD',
      },
      {
        id: '2',
        email: 'jane.smith@company.org',
        avatarImage,
        userInitials: 'JS',
      },
    ],
    classes: {},
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          padding: '1rem',
          backgroundColor: 'var(--blue-8)',
          borderRadius: 'var(--radius-md)',
          transition: 'background-color 0.3s',
        }}
      >
        <div style={{ width: '22.5rem' }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<RecipientListProps>;

export const Default: Story = {
  render: (args) => <RecipientList {...args} />,
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ gap: '1rem', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ width: '22.5rem' }}>
        <RecipientList
          recipients={[
            { id: '1', email: 'john.doe@example.com', avatarImage, userInitials: 'JD' },
            { id: '2', email: 'jane.smith@company.org', avatarImage, userInitials: 'JS' },
          ]}
        />
      </div>
      <div style={{ width: '40rem' }}>
        <RecipientList
          recipients={[
            { id: '3', email: 'user1@domain.com', avatarImage, userInitials: 'U1' },
            { id: '4', email: 'user2@domain.com', avatarImage, userInitials: 'U2' },
          ]}
        />
      </div>
    </div>
  ),
};
