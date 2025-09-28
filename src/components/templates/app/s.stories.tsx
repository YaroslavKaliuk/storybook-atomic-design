import type { Meta, StoryObj } from '@storybook/react';

import { UIAppType } from '../../../types/enums';
import { App, type AppProps } from './app';

const meta: Meta<AppProps> = {
  title: 'Components/Templates/App',
  component: App as React.ComponentType<AppProps>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '`<App />` template wraps the entire application. This is the topmost/first level of the application.<br /> Application wrapper structure:  `<App />` => `<Page />` => [`<Header />`, `<Main />`, `<Footer/>`].',
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
  },
  args: {
    children: 'App wrapper',
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
type Story = StoryObj<AppProps>;

export const Default: Story = {
  render: (args) => <App {...args} />,
};
