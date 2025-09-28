import type { Meta, StoryObj } from '@storybook/react';

import { AddEtag, AddEtagProps } from './addEtag';

type StoryProps = Partial<AddEtagProps>;

const meta: Meta<StoryProps> = {
  title: 'Components/Molecules/AddEtag',
  component: AddEtag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36584&t=U332RiDqt22jjmre-4" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the component',
      table: {
        type: { summary: 'String: {root, area, list, error, dropdown, dropdownNew, title}' },
      },
    },
  },
  args: {
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

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: () => <AddEtag />,
  parameters: {
    docs: {},
  },
};

export const WithSuggestedTags: Story = {
  render: () => (
    <AddEtag
      suggestedTags={[
        'Important',
        'Urgent',
        'Review',
        'Approved',
        'Draft',
        'Final',
        'Confidential',
        'Public',
      ]}
      initialTags={['Project A', 'Meeting']}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Component with suggested tags dropdown and initial tags',
      },
    },
  },
};
