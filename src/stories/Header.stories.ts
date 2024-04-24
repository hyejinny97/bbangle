import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/shared/components/Header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Header',
  args: {
    title: 'Header Content'
  }
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const WithBackButton: Story = {
  args: {
    back: true
  }
};
