import type { Meta, StoryObj } from '@storybook/react';

import { UIAppType } from '../../../types';
import { App } from '../../templates';
import { SignInPage } from './signInPage';

const meta: Meta<typeof SignInPage> = {
  title: 'Components/Pages/SignInPage',
  component: SignInPage,
  parameters: {
    layout: 'centered',
  },
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof SignInPage>;

export const WebBased: Story = {
  render: () => (
    <App appType={UIAppType.webBased}>
      <SignInPage appType={UIAppType.webBased} />
    </App>
  ),
};

export const Extension: Story = {
  render: () => (
    <App appType={UIAppType.extension}>
      <SignInPage appType={UIAppType.extension} />
    </App>
  ),
};

export const Outlook: Story = {
  render: () => (
    <App appType={UIAppType.outlook}>
      <SignInPage appType={UIAppType.outlook} />
    </App>
  ),
};
