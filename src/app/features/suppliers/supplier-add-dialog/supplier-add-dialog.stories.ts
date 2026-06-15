import type { Meta, StoryObj } from '@storybook/angular';
import { within, userEvent, expect, waitFor } from '@storybook/test';
import { SupplierAddDialogComponent } from './supplier-add-dialog';

const meta: Meta<SupplierAddDialogComponent> = {
  title: 'Features/SupplierAddDialog',
  component: SupplierAddDialogComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SupplierAddDialogComponent>;

export const Default: Story = {};

export const Filled: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Fill Supplier Name', async () => {
      const input = canvas.getByLabelText(/^supplier name$/i);
      await userEvent.type(input, 'Acme Parts Ltd');
    });

    await step('Fill Category', async () => {
      const input = canvas.getByLabelText(/^category$/i);
      await userEvent.type(input, 'Industrial Parts');
    });

    await step('Fill Country', async () => {
      const input = canvas.getByLabelText(/^country$/i);
      await userEvent.type(input, 'United States');
    });

    await step('Fill Email', async () => {
      const input = canvas.getByLabelText(/^email$/i);
      await userEvent.type(input, 'sales@acmeparts.com');
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
        expect(canvas.getByText('Name is required')).toBeInTheDocument();
        expect(canvas.getByText('Category is required')).toBeInTheDocument();
        expect(canvas.getByText('Country is required')).toBeInTheDocument();
      });
    });
  },
};
