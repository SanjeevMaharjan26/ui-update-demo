import type { Meta, StoryObj } from '@storybook/angular';
import { NxPageHeaderComponent } from './nx-page-header';

const meta: Meta<NxPageHeaderComponent> = {
  title: 'Layout/NxPageHeader',
  component: NxPageHeaderComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<NxPageHeaderComponent>;

export const Default: Story = {
  args: { title: 'Products', subtitle: 'Manage product inventory' },
};
export const NoSubtitle: Story = {
  args: { title: 'Dashboard' },
};
export const WithActions: Story = {
  render: () => ({
    template: `
      <nx-page-header title="Purchase Orders" subtitle="Manage all purchase orders">
        <div actions>
          <button mat-raised-button color="primary"><mat-icon>add</mat-icon> New PO</button>
        </div>
      </nx-page-header>
    `,
  }),
};
