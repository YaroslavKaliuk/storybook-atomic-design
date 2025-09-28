import type { Meta, StoryObj } from '@storybook/react';

import { UIAppType } from '../../../types';
import { App } from '../../templates';
import { WelcomePage } from './welcomePage';

const meta: Meta<typeof WelcomePage> = {
  title: 'Components/Pages/WelcomePage',
  component: WelcomePage,
  parameters: {
    layout: 'centered',
  },
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof WelcomePage>;

export const WebBased: Story = {
  render: () => (
    <App appType={UIAppType.webBased}>
      <WelcomePage appType={UIAppType.webBased} />
    </App>
  ),
};

export const Extension: Story = {
  render: () => (
    <App appType={UIAppType.extension}>
      <WelcomePage appType={UIAppType.extension} />
    </App>
  ),
};

export const Outlook: Story = {
  render: () => (
    <App appType={UIAppType.outlook}>
      <WelcomePage appType={UIAppType.outlook} />
    </App>
  ),
};
