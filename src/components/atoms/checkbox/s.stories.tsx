import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox, type CheckboxProps } from './checkbox';

const meta: Meta<CheckboxProps> = {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=1704-53142&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Checkbox label text',
      table: {
        type: { summary: 'string' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the checkbox elements',
      table: {
        type: { summary: 'String: {root, title, icon}' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is checked (controlled)',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onChange: {
      description: 'Callback fired when the checkbox state changes',
      table: {
        type: { summary: '(checked: boolean) => void' },
      },
    },
    name: {
      control: { type: 'text' },
      description: 'Name attribute for the checkbox input',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    title: 'Checkbox',
    checked: false,
    disabled: false,
    name: 'checkbox',
    onChange: () => {},
    classes: {},
  },
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  render: (args) => <Checkbox {...args} />,
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '22.5rem' }}>
      <Checkbox title="Default checkbox" />
      <Checkbox title="Checked checkbox" checked />
      <Checkbox title="Checkbox with long text that should demonstrate text overflow behavior with ellipsis" />
      <Checkbox title="Disabled checkbox" disabled />
      <Checkbox title="Disabled checked checkbox" disabled checked />
    </div>
  ),
};
