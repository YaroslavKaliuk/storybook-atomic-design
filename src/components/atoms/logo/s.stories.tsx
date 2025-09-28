import type { Meta, StoryObj } from '@storybook/react';

import { UISize } from '../../../types/enums';
import { Logo, type LogoProps } from './logo';

const meta: Meta<LogoProps> = {
  title: 'Components/Atoms/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36848&t=MtlmuLFpYmTrC7kn-4" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: [UISize.sm, UISize.md, UISize.lg],
      control: { type: 'radio' },
      description: 'Logo size variant',
      table: {
        type: { summary: 'UISize.sm | UISize.md | UISize.lg' },
        defaultValue: { summary: 'UISize.md' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Custom CSS classes',
      table: {
        type: { summary: 'Object: {root}' },
      },
    },
  },
  args: {
    size: UISize.md,
    classes: {},
  },
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<LogoProps>;

export const Default: Story = {
  render: (args) => <Logo {...args} />,
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
      <Logo size={UISize.sm} />
      <Logo size={UISize.md} />
      <Logo size={UISize.lg} />
    </div>
  ),
};
