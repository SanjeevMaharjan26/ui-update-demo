import type { Meta, StoryObj } from '@storybook/angular';
import { within, userEvent, expect, waitFor } from '@storybook/test';
import { UserAddDialogComponent } from './user-add-dialog';

const meta: Meta<UserAddDialogComponent> = {
  title: 'Features/UserAddDialog',
  component: UserAddDialogComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<UserAddDialogComponent>;

export const Default: Story = {};

export const Filled: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Fill Full Name', async () => {
      const input = canvas.getByLabelText(/^full name$/i);
      await userEvent.type(input, 'Jane Doe');
    });

    await step('Fill Email', async () => {
      const input = canvas.getByLabelText(/^email$/i);
      await userEvent.type(input, 'jane.doe@nexus.com');
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
        expect(canvas.getByText('Email is required')).toBeInTheDocument();
      });
    });
  },
};
