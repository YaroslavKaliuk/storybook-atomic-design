import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Switcher, type SwitcherProps } from './switcher';

const meta: Meta<SwitcherProps> = {
  title: 'Components/Atoms/Switcher',
  component: Switcher,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=2409-25253&t=V4rkNQDpTDex6YmT-0" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Title of the switcher',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the switcher',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Control the switcher state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onChange: {
      description: 'Callback when switcher state changes',
      table: {
        type: { summary: '(event: React.ChangeEvent<HTMLInputElement>) => void' },
      },
    },
    id: {
      control: { type: 'text' },
      description: 'ID attribute for the input element',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    name: {
      control: { type: 'text' },
      description: 'Name attribute for the input element',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the switcher',
      table: {
        type: { summary: 'String: {root, title, input}' },
      },
    },
  },
  args: {
    title: '',
    disabled: false,
    checked: false,
    id: '',
    name: '',
    classes: {},
  },
  decorators: [
    (Story, context) => {
      const [checked, setChecked] = useState(context.args.checked);

      if (context.args.checked !== checked) {
        setChecked(context.args.checked);
      }

      return (
        <Story args={{ ...context.args, checked, onChange: (e) => setChecked(e.target.checked) }} />
      );
    },
  ],
};

export default meta;

type Story = StoryObj<SwitcherProps>;

export const Default: Story = {
  render: (args) => <Switcher {...args} />,
};

export const AllVariants: Story = {
  render: function AllVariantsRender() {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(true);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(true);

    return (
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Switcher
          title="Default"
          checked={checked1}
          onChange={(e) => setChecked1(e.target.checked)}
        />
        <Switcher
          title="Checked"
          checked={checked2}
          onChange={(e) => setChecked2(e.target.checked)}
        />
        <Switcher
          title="Disabled"
          disabled
          checked={checked3}
          onChange={(e) => setChecked3(e.target.checked)}
        />
        <Switcher
          title="Disabled Checked"
          disabled
          checked={checked4}
          onChange={(e) => setChecked4(e.target.checked)}
        />
      </div>
    );
  },
};
