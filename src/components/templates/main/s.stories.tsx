import type { Meta, StoryObj } from '@storybook/react';

import { UIAppType } from '../../../types/enums';
import { Main, type MainProps } from './main';

const meta: Meta<MainProps> = {
  title: 'Components/Templates/Main',
  component: Main as React.ComponentType<MainProps>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '`<Main />` template has a `main` tag and wraps the main content. This is the third level of the application wrapper.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Content to be rendered inside the template',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    appType: {
      options: [UIAppType.webBased, UIAppType.extension, UIAppType.outlook, UIAppType.expanded],
      control: { type: 'radio' },
      description: 'Application type that determines layout and behavior',
      table: {
        type: { summary: 'UIAppType' },
        defaultValue: { summary: 'undefined' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the component',
      table: {
        type: { summary: 'String: {root}' },
      },
    },
  },
  args: {
    children: 'Main content',
  },

  decorators: [
    (Story) => (
      <div
        style={{
          height: '10rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<MainProps>;

export const Default: Story = {
  render: (args) => <Main {...args} />,
};
