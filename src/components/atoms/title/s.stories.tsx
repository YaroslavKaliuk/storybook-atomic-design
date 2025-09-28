import type { Meta, StoryObj } from '@storybook/react';

import { UISize } from '../../../types/enums';
import { Title, type TitleProps } from './title';

const meta: Meta<TitleProps> = {
  title: 'Components/Atoms/Title',
  component: Title as React.ComponentType<TitleProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36226&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Title text content',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Title' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the title',
      table: {
        type: { summary: 'String: {root}' },
      },
    },
    size: {
      options: [UISize.sm, UISize.md],
      control: { type: 'radio' },
      description: 'Title size variant',
      table: {
        type: { summary: 'UISize.sm | UISize.md' },
        defaultValue: { summary: 'UISize.md' },
      },
    },
  },
  args: {
    children: 'Title',
    size: UISize.md,
    classes: {},
  },
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<TitleProps>;

export const Default: Story = {
  render: (args) => <Title {...args} />,
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '22.5rem' }}>
      <Title size={UISize.sm}>Small Title</Title>
      <Title size={UISize.md}>Medium Title</Title>
      <Title size={UISize.md}>
        This is a very long title text that should demonstrate text overflow behavior with ellipsis
        This is a very long title text that should demonstrate text overflow behavior with ellipsis
      </Title>
    </div>
  ),
};
