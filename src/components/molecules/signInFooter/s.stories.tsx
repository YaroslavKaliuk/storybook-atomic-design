import type { Meta, StoryObj } from '@storybook/react';

import { SignInFooter, type SignInFooterProps } from './signInFooter';

const meta: Meta<SignInFooterProps> = {
  title: 'Components/Molecules/SignInFooter',
  component: SignInFooter,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36856&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    classes: {
      control: { type: 'object' },
      description: 'Custom CSS classes to apply to component elements',
      table: {
        type: { summary: '{root?: string, text?: string}' },
      },
    },
  },
  args: {
    classes: {},
  },
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<SignInFooterProps>;

export const Default: Story = {
  render: (args) => <SignInFooter {...args} />,
};
