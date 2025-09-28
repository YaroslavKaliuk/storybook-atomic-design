import type { Meta, StoryObj } from '@storybook/react';

import { AppBar, type AppBarProps } from './appBar';

const meta: Meta<AppBarProps> = {
  title: 'Components/Molecules/AppBar',
  component: AppBar as React.ComponentType<AppBarProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36236&t=Quxr71wysmiRqKSg-4" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the app bar',
      table: {
        type: {
          summary:
            'Partial<Record<"root" | "buttonDrag" | "buttonFullscreen" | "buttonClose", string>>',
        },
      },
    },
    dragHandleRef: {
      control: false,
      description: 'Ref to the drag handle button',
      table: {
        type: { summary: 'React.RefObject<HTMLButtonElement>' },
      },
    },
    onFullscreenChange: {
      control: false,
      description: 'Callback when fullscreen state changes',
      table: {
        type: { summary: '(isFullscreen: boolean) => void' },
      },
    },
    onClose: {
      control: false,
      description: 'Callback when close button is clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
    isFullscreen: {
      control: 'boolean',
      description: 'Whether the app bar is in fullscreen mode',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    isFullscreen: false,
    onFullscreenChange: () => {},
    onClose: () => {},
    classes: {},
  },
  decorators: [
    (Story) => (
      <div style={{ width: '22.5rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<AppBarProps>;

export const Default: Story = {
  render: (args) => <AppBar {...args} />,
};
