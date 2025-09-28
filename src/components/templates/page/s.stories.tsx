import type { Meta, StoryObj } from '@storybook/react';

import { UIAppType } from '../../../types/enums';
import { Page, type PageProps } from './page';

const meta: Meta<PageProps> = {
  title: 'Components/Templates/Page',
  component: Page as React.ComponentType<PageProps>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '`<Page />` template wraps: `<Header />`, `<Main />`, `<Footer />`. This is the second level of application wrapping.',
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
    children: 'Page content',
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
type Story = StoryObj<PageProps>;

export const Default: Story = {
  render: (args) => <Page {...args} />,
};
