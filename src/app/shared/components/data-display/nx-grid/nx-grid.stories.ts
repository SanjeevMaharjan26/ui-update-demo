import type { Meta, StoryObj } from '@storybook/angular';
import { NxGridComponent } from './nx-grid';

const meta: Meta<NxGridComponent> = {
  title: 'Data Display/NxGrid',
  component: NxGridComponent,
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'select', options: ['simple', 'advanced'] },
    showSearch: { control: 'boolean' },
    showIndex: { control: 'boolean' },
    pageSize: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<NxGridComponent>;

const sampleColumns = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'category', header: 'Category', sortable: true },
  { key: 'status', header: 'Status', type: 'status' as const, sortable: true },
  { key: 'price', header: 'Price', type: 'currency' as const, sortable: true },
];

const sampleData = [
  { name: 'Bearing 6205', category: 'Bearings', status: 'active', price: 12.50 },
  { name: 'Hydraulic Seal', category: 'Seals', status: 'active', price: 8.75 },
  { name: 'Steel Bolt M12', category: 'Fasteners', status: 'inactive', price: 0.45 },
  { name: 'Filter Element', category: 'Filtration', status: 'pending', price: 24.00 },
];

export const SimpleMode: Story = {
  args: { mode: 'simple', columns: sampleColumns, data: sampleData },
};
export const AdvancedMode: Story = {
  args: {
    mode: 'advanced',
    columns: sampleColumns,
    data: sampleData,
    showSearch: true,
    pageSize: 5,
  },
};
export const Empty: Story = {
  args: { mode: 'simple', columns: sampleColumns, data: [] },
};
export const WithIndex: Story = {
  args: { mode: 'simple', columns: sampleColumns, data: sampleData, showIndex: true },
};
export const InventoryNewDesign: Story = {
  decorators: [(storyFn) => { const story = storyFn(); return { ...story, template: `<div class="inventory-module" style="padding:24px">${story.template}</div>` }; }],
  args: { mode: 'simple', columns: sampleColumns, data: sampleData },
};
