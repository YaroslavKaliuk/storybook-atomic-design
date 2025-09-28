import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { UISize } from '../../../types/enums';
import { Pagination, type PaginationProps } from './pagination';

const meta: Meta<PaginationProps> = {
  title: 'Components/Atoms/Pagination',
  component: Pagination as React.ComponentType<PaginationProps>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37696&t=5h4oCY1nFlPrEN7l-4" target="_blank"><b>Figma Design</b></a>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: [UISize.sm, UISize.md],
      description: 'Component size',
      table: {
        type: { summary: 'Exclude<UISize, UISize.lg | UISize.xl>' },
        defaultValue: { summary: UISize.md },
      },
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '10' },
      },
    },
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Current page number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    onPageChange: {
      description: 'Callback when page changes',
      table: {
        type: { summary: '(page: number) => void' },
      },
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to apply to the pagination',
      table: {
        type: {
          summary: 'String: {root, button, buttonText, count, list, dots, page, pageActive, icon}',
        },
      },
    },
  },
  args: {
    size: UISize.sm,
    totalPages: 10,
    currentPage: 1,
    classes: {},
  },
  decorators: [
    (Story, context) => {
      const [page, setPage] = useState(context.args.currentPage);
      return <Story args={{ ...context.args, currentPage: page, onPageChange: setPage }} />;
    },
  ],
};

export default meta;

type Story = StoryObj<PaginationProps>;

export const Default: Story = {
  args: { size: UISize.sm },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '2rem', placeItems: 'center' }}>
      <Pagination size={UISize.sm} totalPages={10} currentPage={10} onPageChange={() => {}} />
      <Pagination size={UISize.md} totalPages={10} currentPage={1} onPageChange={() => {}} />
      <Pagination size={UISize.md} totalPages={20} currentPage={10} onPageChange={() => {}} />
    </div>
  ),
};
