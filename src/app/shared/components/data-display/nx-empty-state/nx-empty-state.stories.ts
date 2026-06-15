import type { Meta, StoryObj } from '@storybook/angular';
import { NxEmptyStateComponent } from './nx-empty-state';

const meta: Meta<NxEmptyStateComponent> = {
  title: 'Data Display/NxEmptyState',
  component: NxEmptyStateComponent,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text' },
    message: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<NxEmptyStateComponent>;

export const Default: Story = {
  args: { icon: 'inventory_2', message: 'No items found' },
};
export const WithAction: Story = {
  args: { icon: 'search_off', message: 'No results match your search' },
};
export const CustomIcon: Story = {
  args: { icon: 'error_outline', message: 'Something went wrong' },
};
