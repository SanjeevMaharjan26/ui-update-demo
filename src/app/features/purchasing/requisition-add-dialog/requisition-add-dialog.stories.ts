import type { Meta, StoryObj } from '@storybook/angular';
import { within, userEvent, expect, waitFor } from '@storybook/test';
import { RequisitionAddDialogComponent } from './requisition-add-dialog';

const meta: Meta<RequisitionAddDialogComponent> = {
  title: 'Features/RequisitionAddDialog',
  component: RequisitionAddDialogComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<RequisitionAddDialogComponent>;

export const Default: Story = {};

export const Filled: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Fill Description', async () => {
      const input = canvas.getByLabelText(/^description$/i);
      await userEvent.type(input, 'Hydraulic seal kits for press #4');
    });

    await step('Fill Requested By', async () => {
      const input = canvas.getByLabelText(/^requested by$/i);
      await userEvent.type(input, 'Alice Brown');
    });

    await step('Fill Required Date', async () => {
      const input = canvas.getByLabelText(/^required date$/i);
      await userEvent.type(input, '2026-07-01');
    });

    await step('Fill Estimated Cost', async () => {
      const input = canvas.getByLabelText(/^estimated cost$/i);
      await userEvent.type(input, '2500');
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

    await step('Fill Description', async () => {
      const input = canvas.getByLabelText(/^description$/i);
      await userEvent.type(input, 'Hydraulic seal kits for press #4');
    });

    await step('Fill Requested By', async () => {
      const input = canvas.getByLabelText(/^requested by$/i);
      await userEvent.type(input, 'Alice Brown');
    });

    await step('Fill Required Date', async () => {
      const input = canvas.getByLabelText(/^required date$/i);
      await userEvent.type(input, '2026-07-01');
    });

    await step('Fill Estimated Cost', async () => {
      const input = canvas.getByLabelText(/^estimated cost$/i);
      await userEvent.type(input, '2500');
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
        expect(canvas.getByText('Description is required')).toBeInTheDocument();
        expect(canvas.getByText('Requestor is required')).toBeInTheDocument();
        expect(canvas.getByText('Department is required')).toBeInTheDocument();
        expect(canvas.getByText('Required date is required')).toBeInTheDocument();
        expect(canvas.getByText('Estimated cost is required')).toBeInTheDocument();
      });
    });
  },
};
