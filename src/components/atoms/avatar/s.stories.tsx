import type { Meta, StoryObj } from '@storybook/react';

import { UISize } from '../../../types';
import { Avatar, type AvatarProps } from './avatar';
import avatarImage from './avatar.png';

const meta: Meta<AvatarProps> = {
  title: 'Components/Atoms/Avatar',
  component: Avatar as React.ComponentType<AvatarProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37097&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: [UISize.sm, UISize.md, UISize.lg],
      description: 'Avatar sizes',
      table: {
        type: { summary: 'Exclude<UISize, UISize.xl>' },
        defaultValue: { summary: UISize.md },
      },
    },
    userInitials: {
      control: { type: 'text' },
      description: 'User initials to display when image is not available',
      table: {
        type: { summary: 'string' },
      },
    },
    imgSrc: {
      control: { type: 'text' },
      description: 'URL of the avatar image',
      table: {
        type: { summary: 'string' },
      },
    },
    href: {
      control: { type: 'text' },
      description: 'Optional link URL for clickable avatar',
      table: {
        type: { summary: 'string' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the avatar',
      table: {
        type: { summary: 'String: {root, img, initials}' },
      },
    },
  },
  args: {
    size: UISize.md,
    userInitials: 'YK',
    imgSrc: avatarImage,
    href: '#',
    classes: {},
  },
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<AvatarProps>;

export const Default: Story = {
  args: { size: UISize.md },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
      <Avatar {...args} size={UISize.sm} />
      <Avatar {...args} size={UISize.md} />
      <Avatar {...args} size={UISize.lg} />
      <Avatar {...args} size={UISize.md} imgSrc="" userInitials="YK" />
    </div>
  ),
  args: { ...meta.args },
};
