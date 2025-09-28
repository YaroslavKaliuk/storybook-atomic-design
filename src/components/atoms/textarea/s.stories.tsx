import type { Meta, StoryObj } from '@storybook/react';

import { Textarea, type TextareaProps } from './textarea';

const meta: Meta<TextareaProps> = {
  title: 'Components/Atoms/Textarea',
  component: Textarea as React.ComponentType<TextareaProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36566&t=ufJEB4XGwoXvB0ef-4" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the textarea',
      table: {
        type: { summary: 'String: {root, textarea}' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the textarea',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Message…' },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'Textarea content',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: 'Callback when textarea content changes',
      table: {
        type: { summary: '(event: ChangeEvent<HTMLTextAreaElement>) => void' },
      },
    },
  },
  args: {
    placeholder: 'Message…',
    value: '',
    disabled: false,
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

type Story = StoryObj<TextareaProps>;

export const Default: Story = {
  args: {
    classes: {},
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <Textarea placeholder="Default" />
      <Textarea value="With Content. This is a sample text that demonstrates how the textarea looks with content." />
      <Textarea placeholder="Disabled" disabled />
    </div>
  ),
};
