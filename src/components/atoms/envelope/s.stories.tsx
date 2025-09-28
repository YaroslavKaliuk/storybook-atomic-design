import type { Meta, StoryObj } from '@storybook/react';

import { Envelope, type EnvelopeProps } from './envelope';

const meta: Meta<EnvelopeProps> = {
  title: 'Components/Atoms/Envelope',
  component: Envelope as React.ComponentType<EnvelopeProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36872&t=CPPzlJRrtlyuFym9-4" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the envelope component',
      table: {
        type: { summary: 'String: {root}' },
      },
    },
  },
  args: {
    hashtag: 'Hashtag',
    count: 1,
    classes: {},
  },
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<EnvelopeProps>;

export const Default: Story = {
  render: (args) => <Envelope {...args} />,
};
