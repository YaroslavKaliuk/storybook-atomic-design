import type { ComponentType } from 'react';

import { IconMonoCheck, IconMonoCopy } from '@frontend/ui-icons-v2';
import type { Meta, StoryObj } from '@storybook/react';

import { Button, type ButtonProps } from '.';
import { UIColor, UISize } from '../../../types/enums';

type ButtonStoryProps = ButtonProps;

const meta: Meta<ButtonStoryProps> = {
  title: 'Components/Atoms/Button',
  component: Button as ComponentType<ButtonStoryProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37420&t=soOUYrXPdQi41gl1-4" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: [UISize.sm, UISize.md],
      description: 'Button sizes',
      table: {
        type: { summary: 'Exclude<UISize, UISize.lg | UISize.xl>' },
        defaultValue: { summary: UISize.md },
      },
    },
    color: {
      options: [UIColor.primary, UIColor.secondary, UIColor.special],
      control: { type: 'radio' },
      description: 'Button colors',
      table: {
        type: { summary: 'UIColor' },
        defaultValue: { summary: UIColor.primary },
      },
    },
    title: {
      control: { type: 'text' },
      description: 'Button text content',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable button interaction',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    iconLeft: {
      control: { type: 'select' },
      description: 'Icon to display before text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    iconRight: {
      control: { type: 'select' },
      description: 'Icon to display after text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Show loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      description: 'Click event handler',
      table: {
        type: { summary: '() => void' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the button',
      table: {
        type: { summary: 'String: {root, title, icon, loader}' },
      },
    },
  },
  args: {
    color: UIColor.primary,
    size: UISize.md,
    title: 'Button',
    disabled: false,
    isLoading: false,
    iconLeft: <IconMonoCheck />,
    iconRight: null,
    classes: {},
  },
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<ButtonStoryProps>;

export const Default: Story = {
  args: { color: UIColor.primary },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
      <Button {...args} color={UIColor.primary} size={UISize.md} title="Primary" />
      <Button {...args} color={UIColor.secondary} size={UISize.md} title="Secondary" />
      <Button {...args} color={UIColor.special} size={UISize.md} title="Special" />
      <Button {...args} color={UIColor.primary} size={UISize.sm} title="Small" />
      <Button {...args} color={UIColor.primary} size={UISize.md} disabled title="Disabled" />
      <Button {...args} color={UIColor.primary} size={UISize.md} isLoading title="Loading" />
      <Button
        {...args}
        color={UIColor.primary}
        size={UISize.md}
        iconLeft={<IconMonoCheck />}
        iconRight={<IconMonoCopy />}
        title="With Icons"
      />
    </div>
  ),
  args: { ...meta.args },
};
