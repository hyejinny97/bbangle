import Badge from '@/shared/components/Badge';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Badge,
  title: 'Badge',
  args: { type: 'default', children: 'badge' }
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Type: Story = {
  args: { type: 'default', children: 'badge' }
};
