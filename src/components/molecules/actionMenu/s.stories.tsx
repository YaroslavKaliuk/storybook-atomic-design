import {
  IconMonoAddUser,
  IconMonoChevronRight,
  IconMonoCopy,
  IconMonoDelete,
  IconMonoDocument,
  IconMonoDownload,
  IconMonoEdit,
  IconMonoManageAccess,
  IconMonoReportSpam,
  IconMonoTag,
  IconMonoTimeline,
  IconMonoViewNewTab,
} from '@frontend/ui-icons-v2';
import type { Meta, StoryObj } from '@storybook/react';

import { ActionMenu, type ActionMenuProps } from './actionMenu';

const mockActionItems = [
  {
    id: '1',
    title: 'Document fileName',
    iconLeft: <IconMonoDocument />,
    iconRight: <IconMonoViewNewTab />,
    onClick: () => {},
  },
  {
    id: '2',
    title: 'Add Recipient',
    iconLeft: <IconMonoTimeline />,
    onClick: () => {},
  },
  {
    id: '3',
    title: 'e-Signature',
    iconLeft: <IconMonoAddUser />,
    iconRight: <IconMonoChevronRight />,
    onClick: () => {},
  },
  {
    id: '4',
    title: 'Copy Link',
    iconLeft: <IconMonoCopy />,
    onClick: () => {},
  },
  {
    id: '5',
    title: 'Download',
    iconLeft: <IconMonoDownload />,
    onClick: () => {},
  },
  {
    id: '6',
    title: 'Manage Access',
    iconLeft: <IconMonoManageAccess />,
    onClick: () => {},
  },
  {
    id: '7',
    title: 'Manage eTags / Envelopes',
    iconLeft: <IconMonoTag />,
    onClick: () => {},
  },
  {
    id: '8',
    title: 'Report as Spam',
    iconLeft: <IconMonoReportSpam />,
    onClick: () => {},
  },
  {
    id: '9',
    title: 'Delete',
    iconLeft: <IconMonoDelete />,
    onClick: () => {},
  },
];

const meta: Meta<ActionMenuProps> = {
  title: 'Components/Molecules/ActionMenu',
  component: ActionMenu as React.ComponentType<ActionMenuProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36971&m=dev" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Array of action menu item data',
      table: {
        type: { summary: 'ActionMenuItemData[]' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the action menu',
      table: {
        type: { summary: 'Partial<Record<"root", string>>' },
      },
    },
  },
  args: {
    items: mockActionItems,
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

type Story = StoryObj<ActionMenuProps>;

export const Default: Story = {
  render: (args) => <ActionMenu {...args} />,
};
