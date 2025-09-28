import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Select, type SelectProps } from './select';

const meta: Meta<SelectProps> = {
  title: 'Components/Atoms/Select',
  component: Select as React.ComponentType<SelectProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36380&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isFilter: {
      control: { type: 'boolean' },
      description: 'Enable filtering dropdown items based on input text',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the select input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Placeholder' },
      },
    },
    dropdown: {
      control: { type: 'object' },
      description: 'Array of options for the dropdown',
      table: {
        type: { summary: '{ value: string }[]' },
      },
    },
    onChange: {
      description: 'Callback when selection changes',
      table: {
        type: { summary: '(value: string) => void' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the select',
      table: {
        type: { summary: 'String: {root, selected, dropdown, dropdownScroll, dropdownItem, icon}' },
      },
    },
  },
  args: {
    isFilter: false,
    disabled: false,
    placeholder: 'Placeholder',
    dropdown: [
      { value: 'Apple' },
      { value: 'Banana' },
      { value: 'Orange' },
      { value: 'Grapes' },
      { value: 'Mango' },
      { value: 'Pear' },
    ],
    classes: {},
  },
  decorators: [
    (Story, context) => {
      const [, setValue] = useState('');

      return (
        <div
          style={{
            gap: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            padding: '1rem',
            backgroundColor: 'var(--blue-8)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <div style={{ width: '22.5rem', height: '20rem' }}>
            <Story args={{ ...context.args, onChange: setValue }} />
          </div>
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<SelectProps>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => {
    const variants = [
      { args: { ...args, placeholder: 'Default' } },
      { args: { ...args, isFilter: true, placeholder: 'Type to filter...' } },
      {
        args: {
          ...args,
          placeholder: 'Dropdown items with long text',
          dropdown: [
            { value: 'Very long option name that might wrap to multiple lines' },
            { value: 'Another long option with different text content' },
            { value: 'Short option' },
            { value: 'Yet another long option to demonstrate text wrapping' },
          ],
        },
      },
      { args: { ...args, disabled: true, placeholder: 'Disabled' } },
    ];
    return (
      <>
        {variants.map((variant) => (
          <div key={variant.args.placeholder} style={{ marginBottom: '1rem' }}>
            <Select {...variant.args} onChange={() => {}} />
          </div>
        ))}
      </>
    );
  },
};
