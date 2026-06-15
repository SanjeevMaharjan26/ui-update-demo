import type { Meta, StoryObj } from '@storybook/angular';
import { NxStatusChipComponent } from './nx-status-chip';

const meta: Meta<NxStatusChipComponent> = {
  title: 'Data Display/NxStatusChip',
  component: NxStatusChipComponent,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['active', 'inactive', 'pending', 'approved', 'rejected', 'draft'],
    },
  },
};

export default meta;
type Story = StoryObj<NxStatusChipComponent>;

export const Active: Story = { args: { status: 'active' } };
export const Inactive: Story = { args: { status: 'inactive' } };
export const Pending: Story = { args: { status: 'pending' } };
export const Approved: Story = { args: { status: 'approved' } };
export const Rejected: Story = { args: { status: 'rejected' } };
export const Draft: Story = { args: { status: 'draft' } };
export const InventoryNewDesign: Story = {
  decorators: [(storyFn) => { const story = storyFn(); return { ...story, template: `<div class="inventory-module" style="padding:24px">${story.template}</div>` }; }],
  args: { status: 'active' },
};
