import type { Meta, StoryObj } from '@storybook/react';

import { UIColor } from '../../../types/enums';
import { Link, type LinkProps } from './link';

const meta: Meta<LinkProps> = {
  title: 'Components/Atoms/Link',
  component: Link as React.ComponentType<LinkProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37627&t=soOUYrXPdQi41gl1-4" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      options: ['a', 'button'],
      control: { type: 'radio' },
      description: 'HTML element to render',
      table: {
        type: { summary: 'a | button' },
        defaultValue: { summary: 'a' },
      },
    },
    color: {
      options: [UIColor.primary, UIColor.secondary, UIColor.special],
      control: { type: 'radio' },
      description: 'Link colors',
      table: {
        type: { summary: 'UIColor' },
        defaultValue: { summary: UIColor.primary },
      },
    },
    href: {
      control: { type: 'text' },
      description: 'URL for anchor tag',
      table: {
        type: { summary: 'string' },
      },
      if: { arg: 'as', eq: 'a' },
    },
    children: {
      control: { type: 'text' },
      description: 'Link text content',
      table: {
        type: { summary: 'string' },
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
      description: 'Classes to apply to the link',
      table: {
        type: { summary: 'String: {root}' },
      },
    },
  },
  args: {
    color: UIColor.primary,
    as: 'a',
    href: '#',
    children: 'Link',
    classes: {},
  },
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<LinkProps>;

export const Default: Story = {
  args: { color: UIColor.primary },
};

export const AllVariants: Story = {
  render: (args) => {
    const variants: Array<Partial<LinkProps> & { description: string }> = [
      {
        color: UIColor.primary,
        children: 'Primary',
        description: '',
      },
      {
        color: UIColor.secondary,
        children: 'Secondary',
        description: '',
      },
      {
        color: UIColor.special,
        children: 'Special',
        description: '',
      },
      {
        as: 'button',
        children: 'As button',
        href: undefined,
        description: '',
      },
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {variants.map((variant, i) => {
          const { description, ...linkProps } = variant;
          return (
            <div key={i}>
              <Link {...args} {...linkProps} />
              <div style={{ fontSize: 12, color: '#888' }}>{description}</div>
            </div>
          );
        })}
      </div>
    );
  },
};
