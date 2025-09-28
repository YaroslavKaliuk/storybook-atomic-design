import type { Meta, StoryObj } from '@storybook/react';

import { UIAppType } from '../../../types';
import { App } from '../../templates';
import { NotificationsPage } from './notificationsPage';

const meta: Meta<typeof NotificationsPage> = {
  title: 'Components/Pages/NotificationsPage',
  component: NotificationsPage,
  parameters: {
    layout: 'centered',
  },
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof NotificationsPage>;

export const WebBased: Story = {
  render: () => (
    <App appType={UIAppType.webBased}>
      <NotificationsPage appType={UIAppType.webBased} />
    </App>
  ),
};

export const Extension: Story = {
  render: () => (
    <App appType={UIAppType.extension}>
      <NotificationsPage appType={UIAppType.extension} />
    </App>
  ),
};

export const Outlook: Story = {
  render: () => (
    <App appType={UIAppType.outlook}>
      <NotificationsPage appType={UIAppType.outlook} />
    </App>
  ),
};
