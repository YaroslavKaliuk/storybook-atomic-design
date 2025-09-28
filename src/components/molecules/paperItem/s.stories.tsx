import type { Meta, StoryObj } from '@storybook/react';

import { UIColor } from '../../../types';
import avatarImage from '../../atoms/avatar/avatar.png';
import { type PaperParticipant } from '../paperParticipantList/paperParticipantList';
import { PaperItem, PaperItemProps } from './paperItem';

const mockParticipants: PaperParticipant[] = [
  {
    avatarImage: avatarImage,
    userInitials: 'JD',
    status: 'inactive',
    userName: 'John Doe',
  },
  { avatarImage: '', userInitials: 'AS', status: 'opened', userName: 'Alice Smith' },
  { avatarImage: '', userInitials: 'BJ', status: 'downloaded', userName: 'Bob Johnson' },
  { avatarImage: '', userInitials: 'CW', status: 'shared', userName: 'Carol Wilson' },
  {
    avatarImage: '',
    userInitials: 'DM',
    status: 'shared_downloaded',
    userName: '1_loremipsumdolorsitamet@gmail.com',
  },
  {
    avatarImage: '',
    userInitials: 'EB',
    status: 'inactive',
    userName: '2_loremipsumdolorsitamet@gmail.com',
  },
];

const meta: Meta<PaperItemProps> = {
  title: 'Components/Molecules/PaperItem',
  component: PaperItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37293&t=VRrUiy3z67m8gOwX-4" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'radio' },
      description: 'Color of the paper item',
      table: {
        type: { summary: 'Exclude<UIColor, UIColor.special>' },
        defaultValue: { summary: UIColor.primary },
      },
    },
    title: {
      control: { type: 'text' },
      description: 'Document title',
      table: {
        type: { summary: 'string' },
      },
    },
    ownerName: {
      control: { type: 'text' },
      description: 'Document owner name',
      table: {
        type: { summary: 'string' },
      },
    },
    createdDate: {
      control: { type: 'text' },
      description: 'Document creation date',
      table: {
        type: { summary: 'string' },
      },
    },
    participants: {
      control: { type: 'object' },
      description: 'Array of document participants',
      table: {
        type: { summary: 'PaperParticipant[]' },
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
      description: 'Custom CSS classes for styling',
      table: {
        type: {
          summary:
            "Partial<Record<'root' | 'top' | 'content' | 'bottom' | 'title' | 'createdDate' | 'ownerName' | 'titleTruncated', string>>",
        },
      },
    },
  },
  args: {
    color: UIColor.primary,
    title: 'Document Title Example',
    ownerName: 'John Doe',
    createdDate: '2024-01-15T10:30:00Z',
    participants: mockParticipants,
    onClick: () => {},
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
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<PaperItemProps>;

export const Default: Story = {
  render: (args) => <PaperItem {...args} />,
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ gap: '1rem', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ width: '22.5rem' }}>
        <PaperItem
          title="Contract Agreement 2024"
          ownerName="John Doe"
          createdDate="2024-01-15T10:30:00Z"
          participants={mockParticipants.slice(0, 3)}
          onClick={() => {}}
        />
      </div>
      <div style={{ width: '22.5rem' }}>
        <PaperItem
          title="Financial Report Q4 - Very Long Document Title That Should Be Truncated"
          ownerName="Jane Smith"
          createdDate="2024-02-20T14:45:00Z"
          participants={mockParticipants}
          onClick={() => {}}
        />
      </div>
      <div style={{ width: '22.5rem' }}>
        <PaperItem
          title="Project Proposal"
          ownerName="Mike Johnson"
          createdDate="2024-03-10T09:15:00Z"
          participants={mockParticipants.slice(0, 5)}
          onClick={() => {}}
        />
      </div>
    </div>
  ),
};
