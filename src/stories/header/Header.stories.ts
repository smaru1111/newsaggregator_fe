import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta = {
  title: 'Example/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = {
  args: {
    title: "NewsAggregator",
    label: 'Header',
  },
};