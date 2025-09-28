import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { UIColor, UISize } from '../../../types/enums';
import { Input, type InputProps } from './input';

const meta: Meta<InputProps> = {
  title: 'Components/Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36465&t=0rC16mPMoTZE9y6d-4" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: [UIColor.primary, UIColor.secondary],
      control: { type: 'radio' },
      description: 'Input color variant',
      table: {
        type: { summary: 'Exclude<UIColor, UIColor.special>' },
        defaultValue: { summary: 'UIColor.primary' },
      },
    },
    title: {
      control: { type: 'text' },
      description: 'Input label text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'Input value',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder is always transparent when it has a title',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    error: {
      control: { type: 'text' },
      description: 'Error message text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    name: {
      control: { type: 'text' },
      description: 'Input name attribute',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    iconLeft: {
      control: { type: 'text' },
      description: 'Left icon element',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    iconRight: {
      control: { type: 'text' },
      description: 'Right icon element',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onChange: {
      description: 'Change handler function',
      table: {
        type: { summary: '(value: string) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    size: {
      options: [UISize.sm, UISize.md],
      control: { type: 'radio' },
      description: 'Input size variant',
      table: {
        type: { summary: 'UISize.sm | UISize.md' },
        defaultValue: { summary: 'UISize.md' },
      },
    },
    type: {
      options: ['text', 'password', 'search', 'email', 'number'],
      control: { type: 'radio' },
      description: 'Input type',
      table: {
        type: { summary: 'text | password | search | email | number' },
        defaultValue: { summary: 'text' },
      },
    },
    maxLength: {
      control: { type: 'boolean' },
      description: 'Enable max length',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'Read-only input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    autoFocus: {
      control: { type: 'boolean' },
      description: 'Auto focus input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the input',
      table: {
        type: {
          summary:
            'String: {root, wrapper, content, type, title, error, iconLeft, iconRight, maxLength}',
        },
      },
    },
  },
  args: {
    color: UIColor.primary,
    size: UISize.md,
    type: 'text',
    title: 'Input title',
    placeholder: 'Placeholder',
    error: '',
    value: '',
    name: 'inputName',
    maxLength: 0,
    disabled: false,
    readOnly: false,
    autoFocus: false,
    classes: {},
  },
  decorators: [
    (Story, context) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          padding: '1rem',
          backgroundColor:
            context.args.color === UIColor.secondary ? 'var(--white)' : 'var(--blue-8)',
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

type Story = StoryObj<InputProps>;

const DefaultComponent = (args: InputProps) => {
  const [value, setValue] = useState(args.value || '');
  const { maxLength, ...restArgs } = args;

  return (
    <Input
      {...restArgs}
      value={value}
      onChange={setValue}
      maxLength={maxLength ? 200 : null}
      size={restArgs.size || UISize.md}
      color={restArgs.color || UIColor.primary}
      autoFocus={restArgs.autoFocus}
    />
  );
};

export const Default: Story = {
  render: (args) => <DefaultComponent {...args} />,
};

const AllVariantsComponent = (args: InputProps) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <Input
        title="Default"
        color={UIColor.primary}
        size={UISize.md}
        name="default-input"
        value={value}
        onChange={setValue}
      />
      <Input
        placeholder="Placeholder"
        color={UIColor.primary}
        size={UISize.md}
        name="placeholder-input"
        value={value}
        onChange={setValue}
      />
      <Input
        title="Error"
        error="This field is required"
        color={UIColor.primary}
        size={UISize.md}
        name="error-input"
        value={value}
        onChange={setValue}
      />
      <Input
        title="Password"
        type="password"
        color={UIColor.primary}
        size={UISize.md}
        name="password-input"
        value={value}
        onChange={setValue}
      />
      <Input
        title="Search"
        type="search"
        color={UIColor.primary}
        size={UISize.md}
        name="search-input"
        value={value}
        onChange={setValue}
      />
      <Input
        title="Max Length"
        maxLength={200}
        color={UIColor.primary}
        size={UISize.md}
        name="maxlength-input"
        value={value}
        onChange={setValue}
      />
      <Input
        title="Disabled"
        disabled
        color={UIColor.primary}
        size={UISize.md}
        name="disabled-input"
        value={value}
        onChange={setValue}
      />
      <Input
        title="Read Only"
        readOnly
        color={UIColor.primary}
        size={UISize.md}
        name="readonly-input"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export const AllVariants: Story = {
  render: (args) => <AllVariantsComponent {...args} />,
};
