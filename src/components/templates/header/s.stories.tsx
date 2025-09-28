import type { Meta, StoryObj } from '@storybook/react';

import { UIAppType } from '../../../types/enums';
import { Header, type HeaderProps } from './header';

const meta: Meta<HeaderProps> = {
  title: 'Components/Templates/Header',
  component: Header as React.ComponentType<HeaderProps>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '`<Header />` template has a `header` tag. This is the fourth level of the application wrapper.',
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
    children: 'Header content',
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
type Story = StoryObj<HeaderProps>;

export const Default: Story = {
  render: (args) => <Header {...args} />,
};
