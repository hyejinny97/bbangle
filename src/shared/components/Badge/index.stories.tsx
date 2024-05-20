import { STORY_PATH } from '@/stories/path';
import type { Meta, StoryObj } from '@storybook/react';
import Badge from '.';

const meta = {
  component: Badge,
  title: `${STORY_PATH.common}/Badge`,
  args: { type: 'tag', children: 'badge' }
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Type: Story = {
  args: { type: 'default', children: 'badge' }
};
