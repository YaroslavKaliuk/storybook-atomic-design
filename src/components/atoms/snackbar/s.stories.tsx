import type { Meta, StoryObj } from '@storybook/react';

import { UIColor } from '../../../types/enums';
import { Snackbar, type SnackbarProps } from './snackbar';

const meta: Meta<SnackbarProps> = {
  title: 'Components/Atoms/Snackbar',
  component: Snackbar as React.ComponentType<SnackbarProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/fj3YZUI95qph4XIR5twHJ6/Document-GPS---Design-System-(Copy)?node-id=738-36278&t=lHiDuq0CP77zBWjw-0" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: [UIColor.primary, UIColor.secondary, UIColor.special],
      control: { type: 'radio' },
      description: 'Snackbar colors',
      table: {
        type: { summary: 'UIColor' },
        defaultValue: { summary: UIColor.primary },
      },
    },
    message: {
      control: { type: 'text' },
      description: 'Main message text',
      table: {
        type: { summary: 'string' },
      },
    },
    buttonText: {
      control: { type: 'text' },
      description: 'Optional button text',
      table: {
        type: { summary: 'string' },
      },
    },
    buttonOnClick: {
      description: 'Callback when button is clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the snackbar',
      table: {
        type: { summary: 'String: {root, message, button}' },
      },
    },
  },
  args: {
    color: UIColor.primary,
    message: 'Information message',
    buttonText: 'Got it',
    buttonOnClick: () => {},
    classes: {},
  },
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<SnackbarProps>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <Snackbar
        color={UIColor.primary}
        message="Information message"
        buttonText="Got it"
        buttonOnClick={() => {}}
      />
      <Snackbar
        color={UIColor.secondary}
        message="Successful action confirmed"
        buttonText="Got it"
        buttonOnClick={() => {}}
      />
      <Snackbar
        color={UIColor.special}
        message="Error message"
        buttonText="Try again"
        buttonOnClick={() => {}}
      />
      <Snackbar
        color={UIColor.primary}
        message="Information message without action button"
        buttonText=""
      />
    </div>
  ),
};
