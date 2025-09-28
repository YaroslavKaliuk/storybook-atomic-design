import type { Meta, StoryObj } from '@storybook/react';

import { UIColor } from '../../../types';
import { TokenID, type TokenIDProps } from './tokenID';

const meta: Meta<TokenIDProps> = {
  title: 'Components/Atoms/TokenID',
  component: TokenID as React.ComponentType<TokenIDProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37306&t=uVF6yR3ssioD8van-4" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: [UIColor.primary, UIColor.secondary],
      description: 'Color of the token',
      table: {
        type: { summary: 'UIColor' },
        defaultValue: { summary: 'UIColor.primary' },
      },
    },
    tokenId: {
      control: { type: 'text' },
      description: 'Token identifier string',
      table: {
        type: { summary: 'string' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when token is clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the token elements',
      table: {
        type: { summary: "Partial<Record<'root' | 'icon' | 'id', string>>" },
      },
    },
  },
  args: {
    color: UIColor.primary,
    tokenId: '688b6af354ed77c0b006ff8d',
    onClick: () => {},
    classes: {},
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            padding: '1rem',
            backgroundColor: 'var(--blue-8)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <div style={{ width: '5rem' }}>
            <Story />
          </div>
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<TokenIDProps>;

export const Default: Story = {
  render: (args) => <TokenID {...args} />,
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
      <TokenID tokenId="688b6af354ed77c0b006ff8d" onClick={() => {}} />
      <TokenID tokenId="688b6af354ed77c0b006ff8d" color={UIColor.secondary} onClick={() => {}} />
    </div>
  ),
};
