import type { Meta, StoryObj } from '@storybook/angular';
import { within, userEvent, expect, waitFor } from '@storybook/test';
import { CategoryAddDialogComponent } from './category-add-dialog';

const meta: Meta<CategoryAddDialogComponent> = {
  title: 'Features/CategoryAddDialog',
  component: CategoryAddDialogComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CategoryAddDialogComponent>;

export const Default: Story = {};

export const Filled: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Fill Category Name', async () => {
      const input = canvas.getByLabelText(/^category name$/i);
      await userEvent.type(input, 'Bearings');
    });

    await step('Fill Description', async () => {
      const input = canvas.getByLabelText(/^description$/i);
      await userEvent.type(input, 'Ball and roller bearings');
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

    await step('Verify required-field error message appears', async () => {
      await waitFor(() => {
        expect(canvas.getByText('Category name is required')).toBeInTheDocument();
      });
    });
  },
};
