import type { Meta, StoryObj } from '@storybook/react';

import {
  SignInContinueWithEmail,
  type SignInContinueWithEmailProps,
} from './signInContinueWithEmail';

const meta: Meta<SignInContinueWithEmailProps> = {
  title: 'Components/Molecules/SignInContinueWithEmail',
  component: SignInContinueWithEmail,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Component for continuing sign in with email',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    classes: {
      control: { type: 'object' },
      description: 'Custom CSS classes',
      table: {
        type: { summary: 'Partial<Record<"root", string>>' },
      },
    },
  },
  args: {
    classes: {},
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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

type Story = StoryObj<SignInContinueWithEmailProps>;

export const Default: Story = {
  render: (args) => <SignInContinueWithEmail {...args} />,
};
