import { IconMonoApple, IconMultiGoogle, IconMultiMicrosoft } from '@frontend/ui-icons-v2';
import type { Meta, StoryObj } from '@storybook/react';

import { UIColor } from '../../../types';
import { SignInButtons, type SignInButtonsProps } from './signInButtons';

const meta: Meta<SignInButtonsProps> = {
  title: 'Components/Molecules/SignInButtons',
  component: SignInButtons as React.ComponentType<SignInButtonsProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=2402-50893&t=ADxqx5NalxgkbIxw-0" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    buttons: {
      control: { type: 'object' },
      description: 'Buttons',
      table: {
        type: { summary: 'SignInButtonProps[]' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the component',
      table: { type: { summary: 'String: {root}' } },
    },
  },
  args: {
    buttons: [],
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

type Story = StoryObj<SignInButtonsProps>;

export const Default: Story = {
  args: {
    buttons: [
      {
        title: 'Sign in with google',
        onClick: () => {},
        color: UIColor.primary,
        iconLeft: <IconMultiGoogle />,
      },
    ],
  },
};

export const AllVariants: Story = {
  render: () => (
    <SignInButtons
      buttons={[
        {
          title: 'Sign in with google',
          onClick: () => {},
          color: UIColor.primary,
          iconLeft: <IconMultiGoogle />,
        },
        {
          title: 'Sign in with microsoft',
          onClick: () => {},
          color: UIColor.primary,
          iconLeft: <IconMultiMicrosoft />,
        },
        {
          title: 'Sign in with Apple',
          onClick: () => {},
          color: UIColor.secondary,
          iconLeft: <IconMonoApple />,
        },
        { title: 'Sign in with email', onClick: () => {}, color: UIColor.primary },
      ]}
    />
  ),
};
