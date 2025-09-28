import type { Meta, StoryObj } from '@storybook/react';

import avatarImage from '../../atoms/avatar/avatar.png';
import { RecipientItem, RecipientItemProps } from './recipientItem';

const meta: Meta<RecipientItemProps> = {
  title: 'Components/Molecules/RecipientItem',
  component: RecipientItem,
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
    email: {
      control: { type: 'text' },
      description: 'Recipient email address',
      table: {
        type: { summary: 'string' },
      },
    },
    avatarImage: {
      control: { type: 'text' },
      description: 'Avatar image URL',
      table: {
        type: { summary: 'string' },
      },
    },
    userInitials: {
      control: { type: 'text' },
      description: 'User initials for avatar fallback',
      table: {
        type: { summary: 'string' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Custom CSS classes for styling',
      table: {
        type: {
          summary:
            "Partial<Record<'root' | 'avatar' | 'actions' | 'button' | 'buttonText' | 'buttonDelete', string>>",
        },
      },
    },
  },
  args: {
    email: 'john.doe@example.com',
    avatarImage,
    userInitials: 'JD',
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

type Story = StoryObj<RecipientItemProps>;

export const Default: Story = {
  render: (args) => <RecipientItem {...args} />,
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ gap: '1rem', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ width: '22.5rem' }}>
        <RecipientItem email="john.doe@example.com" avatarImage={avatarImage} userInitials="JD" />
      </div>
      <div style={{ width: '40rem' }}>
        <RecipientItem email="jane.smith@company.org" avatarImage={avatarImage} userInitials="JS" />
      </div>
    </div>
  ),
};
