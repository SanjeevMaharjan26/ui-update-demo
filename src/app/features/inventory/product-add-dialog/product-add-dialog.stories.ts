import type { Meta, StoryObj } from '@storybook/angular';
import { within, userEvent, expect, waitFor } from '@storybook/test';
import { ProductAddDialogComponent } from './product-add-dialog';

const meta: Meta<ProductAddDialogComponent> = {
  title: 'Features/ProductAddDialog',
  component: ProductAddDialogComponent,
  tags: ['autodocs'],
  parameters: { docs: { source: { format: true } } },
};

export default meta;
type Story = StoryObj<ProductAddDialogComponent>;

export const Default: Story = {};

const sampleTemplate = `
  <nx-dialog-form-wrapper title="Add Product" [saveDisabled]="false">
    <form class="dialog-form">
      <div class="form-row">
        <mat-form-field appearance="outline"><mat-label>SKU</mat-label><input matInput value="PRD-001"></mat-form-field>
        <mat-form-field appearance="outline"><mat-label>Product Name</mat-label><input matInput value="Industrial Bearing"></mat-form-field>
      </div>
      <div class="form-row">
        <mat-form-field appearance="outline"><mat-label>Category</mat-label><input matInput value="Bearings"></mat-form-field>
        <mat-form-field appearance="outline"><mat-label>Status</mat-label><mat-select value="active"><mat-option value="active">active</mat-option></mat-select></mat-form-field>
      </div>
      <div class="form-row">
        <mat-form-field appearance="outline"><mat-label>Unit Price</mat-label><span matTextPrefix>$&nbsp;</span><input matInput value="12.50"></mat-form-field>
        <mat-form-field appearance="outline"><mat-label>Stock Qty</mat-label><input matInput value="100"></mat-form-field>
      </div>
      <div class="form-row">
        <mat-form-field appearance="outline"><mat-label>Reorder Level</mat-label><input matInput value="10"></mat-form-field>
        <mat-form-field appearance="outline"><mat-label>Supplier</mat-label><input matInput value="Acme Parts"></mat-form-field>
      </div>
    </form>
  </nx-dialog-form-wrapper>`;

export const WithSampleData: Story = {
  render: () => ({ template: sampleTemplate }),
};

export const Filled: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Fill SKU', async () => {
      const input = canvas.getByLabelText(/^sku$/i);
      await userEvent.type(input, 'PRD-001');
    });

    await step('Fill Product Name', async () => {
      const input = canvas.getByLabelText(/^product name$/i);
      await userEvent.type(input, 'Industrial Bearing');
    });

    await step('Fill Category', async () => {
      const input = canvas.getByLabelText(/^category$/i);
      await userEvent.type(input, 'Bearings');
    });

    await step('Fill Unit Price', async () => {
      const input = canvas.getByLabelText(/^unit price$/i);
      await userEvent.type(input, '12.50');
    });

    await step('Fill Stock Qty', async () => {
      const input = canvas.getByLabelText(/^stock qty$/i);
      await userEvent.type(input, '100');
    });

    await step('Fill Reorder Level', async () => {
      const input = canvas.getByLabelText(/^reorder level$/i);
      await userEvent.type(input, '10');
    });

    await step('Fill Supplier', async () => {
      const input = canvas.getByLabelText(/^supplier$/i);
      await userEvent.type(input, 'Acme Parts');
    });

    await step('Verify Save button is enabled', async () => {
      await waitFor(() => {
        const saveBtn = canvas.getByRole('button', { name: /save/i });
        expect(saveBtn).not.toBeDisabled();
      });
    });
  },
};

export const ValidationErrors: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Click Save on empty form', async () => {
      const saveBtn = canvas.getByRole('button', { name: /save/i });
      await userEvent.click(saveBtn);
    });

    await step('Verify required-field error messages appear', async () => {
      await waitFor(() => {
        expect(canvas.getByText('SKU is required')).toBeInTheDocument();
        expect(canvas.getByText('Product name is required')).toBeInTheDocument();
        expect(canvas.getByText('Category is required')).toBeInTheDocument();
        expect(canvas.getByText('Unit price is required')).toBeInTheDocument();
      });
    });
  },
};
