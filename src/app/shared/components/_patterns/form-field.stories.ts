import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Patterns/FormField',
  tags: ['autodocs'],
  parameters: {
    docs: { source: { format: true } },
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 16px; max-width: 400px;">
        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Standard Input</mat-label>
          <input matInput placeholder="e.g. John Doe">
        </mat-form-field>

        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Number Input</mat-label>
          <input matInput type="number" placeholder="0">
        </mat-form-field>

        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Textarea</mat-label>
          <textarea matInput rows="3" placeholder="Enter notes…"></textarea>
        </mat-form-field>

        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Email</mat-label>
          <input matInput type="email" placeholder="user@example.com">
        </mat-form-field>

        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Date</mat-label>
          <input matInput type="date">
        </mat-form-field>
      </div>
    `,
  }),
};

export const WithPrefixAndSuffix: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 16px; max-width: 400px;">
        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Price</mat-label>
          <span matTextPrefix>$&nbsp;</span>
          <input matInput type="number" placeholder="0.00">
        </mat-form-field>

        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Weight</mat-label>
          <input matInput type="number" placeholder="0">
          <span matTextSuffix>kg</span>
        </mat-form-field>

        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Search</mat-label>
          <mat-icon matIconPrefix>search</mat-icon>
          <input matInput placeholder="Search…">
        </mat-form-field>
      </div>
    `,
  }),
};

export const InlineValidation: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 16px; max-width: 400px;">
        <mat-form-field appearance="outline" nxFormField>
          <mat-label>SKU</mat-label>
          <input matInput placeholder="e.g. PRD-001" required>
          <mat-error>SKU is required</mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Quantity</mat-label>
          <input matInput type="number" value="-1" min="0">
          <mat-error>Must be 0 or more</mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Email</mat-label>
          <input matInput type="email" value="invalid">
          <mat-error>Invalid email format</mat-error>
        </mat-form-field>
      </div>
    `,
  }),
};

export const FormRow: Story = {
  render: () => ({
    template: `
      <form class="dialog-form" style="padding: 16px; max-width: 600px;">
        <div class="form-row">
          <mat-form-field appearance="outline" nxFormField>
            <mat-label>First Name</mat-label>
            <input matInput placeholder="e.g. John">
          </mat-form-field>
          <mat-form-field appearance="outline" nxFormField>
            <mat-label>Last Name</mat-label>
            <input matInput placeholder="e.g. Doe">
          </mat-form-field>
        </div>
        <div class="form-row">
          <mat-form-field appearance="outline" nxFormField>
            <mat-label>Email</mat-label>
            <input matInput type="email" placeholder="john@example.com">
          </mat-form-field>
        </div>
        <div class="form-row" style="justify-content: flex-end; gap: 8px;">
          <button mat-stroked-button type="button">Cancel</button>
          <button mat-raised-button color="primary" type="button">Save</button>
        </div>
      </form>
      <p style="color: #666; font-size: 13px; padding: 0 16px;">
        Project convention: forms use <code>.dialog-form</code> container with <code>.form-row</code> for two-column layouts.
        Each field uses <code>appearance="outline"</code> with <code>nxFormField</code> directive.
      </p>
    `,
  }),
};

export const InventoryNewDesign: Story = {
  decorators: [(storyFn) => { const story = storyFn(); return { ...story, template: `<div class="inventory-module" style="padding:24px">${story.template}</div>` }; }],
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 16px; max-width: 400px;">
        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Standard Input</mat-label>
          <input matInput placeholder="e.g. John Doe">
        </mat-form-field>

        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Number Input</mat-label>
          <input matInput type="number" placeholder="0">
        </mat-form-field>

        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Textarea</mat-label>
          <textarea matInput rows="3" placeholder="Enter notes…"></textarea>
        </mat-form-field>

        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Email</mat-label>
          <input matInput type="email" placeholder="user@example.com">
        </mat-form-field>

        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Date</mat-label>
          <input matInput type="date">
        </mat-form-field>
      </div>
    `,
  }),
};

export const FullWidth: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 16px; max-width: 600px;">
        <mat-form-field appearance="outline" nxFormField class="full-width">
          <mat-label>Notes</mat-label>
          <textarea matInput rows="4" placeholder="Enter detailed notes…"></textarea>
        </mat-form-field>
        <p style="color: #666; font-size: 13px;">
          Project convention: add <code>class="full-width"</code> for form fields that span the entire form row.
        </p>
      </div>
    `,
  }),
};
