import type { Meta, StoryObj } from '@storybook/angular';
import { within, userEvent, expect, waitFor } from '@storybook/test';
import { PurchaseOrderAddDialogComponent } from './purchase-order-add-dialog';

const meta: Meta<PurchaseOrderAddDialogComponent> = {
  title: 'Features/PurchaseOrderAddDialog',
  component: PurchaseOrderAddDialogComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PurchaseOrderAddDialogComponent>;

export const Default: Story = {};

export const Filled: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Fill Supplier', async () => {
      const input = canvas.getByLabelText(/^supplier$/i);
      await userEvent.type(input, 'Acme Parts Ltd');
    });

    await step('Fill Order Date', async () => {
      const input = canvas.getByLabelText(/^order date$/i);
      await userEvent.type(input, '2026-06-08');
    });

    await step('Fill Expected Delivery', async () => {
      const input = canvas.getByLabelText(/^expected delivery$/i);
      await userEvent.type(input, '2026-07-08');
    });

    await step('Verify Save button is enabled', async () => {
      await waitFor(() => {
        const saveBtn = canvas.getByRole('button', { name: /save/i });
        expect(saveBtn).not.toBeDisabled();
      });
    });
  },
};

export const InventoryNewDesign: Story = {
  decorators: [(storyFn) => { const story = storyFn(); return { ...story, template: `<div class="inventory-module" style="padding:24px">${story.template}</div>` }; }],
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Fill Supplier', async () => {
      const input = canvas.getByLabelText(/^supplier$/i);
      await userEvent.type(input, 'Acme Parts Ltd');
    });

    await step('Fill Order Date', async () => {
      const input = canvas.getByLabelText(/^order date$/i);
      await userEvent.type(input, '2026-06-08');
    });

    await step('Fill Expected Delivery', async () => {
      const input = canvas.getByLabelText(/^expected delivery$/i);
      await userEvent.type(input, '2026-07-08');
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
        expect(canvas.getByText('Supplier is required')).toBeInTheDocument();
        expect(canvas.getByText('Order date is required')).toBeInTheDocument();
        expect(canvas.getByText('Expected date is required')).toBeInTheDocument();
      });
    });
  },
};
