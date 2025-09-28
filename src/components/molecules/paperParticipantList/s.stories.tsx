import type { Meta, StoryObj } from '@storybook/react';

import { UILibraryView } from '../../../types';
import avatarImage from '../../atoms/avatar/avatar.png';
import { PaperParticipantList, type PaperParticipantListProps } from './paperParticipantList';

const mockParticipants = [
  {
    avatarImage: avatarImage,
    userInitials: 'JD',
    status: 'inactive' as const,
    userName: 'John Doe',
  },
  { avatarImage: '', userInitials: 'AS', status: 'opened' as const, userName: 'Alice Smith' },
  { avatarImage: '', userInitials: 'BJ', status: 'downloaded' as const, userName: 'Bob Johnson' },
  { avatarImage: '', userInitials: 'CW', status: 'shared' as const, userName: 'Carol Wilson' },
  {
    avatarImage: '',
    userInitials: 'DM',
    status: 'shared_downloaded' as const,
    userName: '1_loremipsumdolorsitamet@gmail.com',
  },
  {
    avatarImage: '',
    userInitials: 'EB',
    status: 'inactive' as const,
    userName: '2_loremipsumdolorsitamet@gmail.com',
  },
  {
    avatarImage: '',
    userInitials: 'FT',
    status: 'opened' as const,
    userName: '3_loremipsumdolorsitamet@gmail.com',
  },
  {
    avatarImage: '',
    userInitials: 'GA',
    status: 'downloaded' as const,
    userName: '4_loremipsumdolorsitamet@gmail.com',
  },
  {
    avatarImage: '',
    userInitials: 'HT',
    status: 'shared' as const,
    userName: '5_loremipsumdolorsitamet@gmail.com',
  },
  {
    avatarImage: '',
    userInitials: 'IJ',
    status: 'shared_downloaded' as const,
    userName: '6_loremipsumdolorsitamet@gmail.com',
  },
];

const meta: Meta<PaperParticipantListProps> = {
  title: 'Components/Molecules/PaperParticipantList',
  component: PaperParticipantList as React.ComponentType<PaperParticipantListProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37318&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    participants: {
      control: { type: 'object' },
      description: 'Array of participants to display',
      table: {
        type: { summary: 'PaperParticipant[]' },
      },
    },
    libraryView: {
      control: { type: 'radio' },
      options: [UILibraryView.grid, UILibraryView.list],
      description:
        'Library view mode determining max displayed users (4 for list view, 8 for grid view)',
      table: {
        type: { summary: 'UILibraryView' },
        defaultValue: { summary: 'UILibraryView.grid' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Custom classes for styling',
      table: {
        type: { summary: 'Partial<Record<"root", string>>' },
      },
    },
  },
  args: {
    libraryView: UILibraryView.grid,
    participants: mockParticipants,
    classes: {},
  },
};

export default meta;

type Story = StoryObj<PaperParticipantListProps>;

export const Default: Story = {
  decorators: [
    (Story, context) => (
      <div
        style={{
          paddingBlock: '6rem',
          width: context.args.libraryView === UILibraryView.grid ? '9rem' : '18rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ gap: '1rem', display: 'grid', placeItems: 'center' }}>
      <div style={{ width: '18rem' }}>
        <PaperParticipantList participants={mockParticipants} libraryView={UILibraryView.list} />
      </div>
      <div style={{ width: '9rem' }}>
        <PaperParticipantList participants={mockParticipants} libraryView={UILibraryView.grid} />
      </div>
    </div>
  ),
};
