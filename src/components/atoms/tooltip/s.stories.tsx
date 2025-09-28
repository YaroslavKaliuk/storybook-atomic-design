import { IconMonoAccount } from '@frontend/ui-icons-v2';
import type { Meta, StoryObj } from '@storybook/react';

import { UIPlacement, UISize } from '../../../types/enums';
import { Button } from '../../atoms';
import { Tooltip, type TooltipProps } from './tooltip';

const meta: Meta<TooltipProps> = {
  title: 'Components/Atoms/Tooltip',
  component: Tooltip as React.ComponentType<TooltipProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36867&t=7YFvqNnwPTCVedNF-4" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      options: [
        UIPlacement.top,
        UIPlacement.bottom,
        UIPlacement.left,
        UIPlacement.right,
        UIPlacement.topStart,
        UIPlacement.bottomStart,
        UIPlacement.leftStart,
        UIPlacement.rightStart,
        UIPlacement.topEnd,
        UIPlacement.bottomEnd,
        UIPlacement.leftEnd,
        UIPlacement.rightEnd,
      ],
      control: { type: 'select' },
      description: 'Tooltip placement',
      table: {
        type: { summary: 'UIPlacement' },
        defaultValue: { summary: UIPlacement.bottom },
      },
    },
    content: {
      control: { type: 'text' },
      description: 'Tooltip content',
      table: {
        type: { summary: 'string' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the tooltip',
      table: {
        type: { summary: 'String: {root}' },
      },
    },
  },
  args: {
    placement: UIPlacement.bottom,
    content: 'Tooltip content',
    classes: {},
  },
  decorators: [
    (Story) => (
      <div style={{ paddingBlock: '1rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<TooltipProps>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button size={UISize.sm} title="Hover me">
        Hover me
      </Button>
    </Tooltip>
  ),
  args: {
    content: 'Default tooltip content',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', padding: '2rem' }}>
      <div style={{ display: 'grid', gap: '1rem', placeItems: 'center' }}>
        <Tooltip content="Account icon tooltip">
          <IconMonoAccount />
        </Tooltip>
        <Tooltip content="This is a very long tooltip content that exceeds 30 characters and demonstrates automatic styling">
          <Button size={UISize.sm} title="Long">
            Long
          </Button>
        </Tooltip>
        <Tooltip content="Short content">
          <Button size={UISize.sm} title="Short">
            Short
          </Button>
        </Tooltip>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}
      >
        <Tooltip content="Top placement" placement={UIPlacement.top}>
          <Button size={UISize.sm} title="Top" />
        </Tooltip>
        <Tooltip content="Top start placement" placement={UIPlacement.topStart}>
          <Button size={UISize.sm} title="Top Start" />
        </Tooltip>
        <Tooltip content="Top end placement" placement={UIPlacement.topEnd}>
          <Button size={UISize.sm} title="Top End" />
        </Tooltip>
        <Tooltip content="Left placement" placement={UIPlacement.left}>
          <Button size={UISize.sm} title="Left" />
        </Tooltip>
        <Tooltip content="Left start placement" placement={UIPlacement.leftStart}>
          <Button size={UISize.sm} title="Left Start" />
        </Tooltip>
        <Tooltip content="Left end placement" placement={UIPlacement.leftEnd}>
          <Button size={UISize.sm} title="Left End" />
        </Tooltip>
        <Tooltip content="Right placement" placement={UIPlacement.right}>
          <Button size={UISize.sm} title="Right" />
        </Tooltip>
        <Tooltip content="Right start placement" placement={UIPlacement.rightStart}>
          <Button size={UISize.sm} title="Right Start" />
        </Tooltip>
        <Tooltip content="Right end placement" placement={UIPlacement.rightEnd}>
          <Button size={UISize.sm} title="Right End" />
        </Tooltip>
        <Tooltip content="Bottom placement" placement={UIPlacement.bottom}>
          <Button size={UISize.sm} title="Bottom" />
        </Tooltip>
        <Tooltip content="Bottom start placement" placement={UIPlacement.bottomStart}>
          <Button size={UISize.sm} title="Bottom Start" />
        </Tooltip>
        <Tooltip content="Bottom end placement" placement={UIPlacement.bottomEnd}>
          <Button size={UISize.sm} title="Bottom End" />
        </Tooltip>
      </div>
    </div>
  ),
};
