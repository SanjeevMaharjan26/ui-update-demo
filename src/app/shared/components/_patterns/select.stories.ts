import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Patterns/Select',
  tags: ['autodocs'],
  parameters: {
    docs: { source: { format: true } },
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => ({
    template: `
      <div style="padding: 16px; max-width: 400px;">
        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Status</mat-label>
          <mat-select value="active">
            <mat-option value="active">Active</mat-option>
            <mat-option value="inactive">Inactive</mat-option>
            <mat-option value="draft">Draft</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
    `,
  }),
};

export const WithOptionsArray: Story = {
  render: () => ({
    template: `
      <div style="padding: 16px; max-width: 400px;">
        <p style="color: #666; font-size: 13px; margin-bottom: 12px;">
          Project convention: <code>*ngFor="let opt of options" [value]="opt"</code>
        </p>
        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Department</mat-label>
          <mat-select value="Engineering">
            <mat-option value="Production">Production</mat-option>
            <mat-option value="Maintenance">Maintenance</mat-option>
            <mat-option value="Engineering">Engineering</mat-option>
            <mat-option value="Warehouse">Warehouse</mat-option>
            <mat-option value="Admin">Admin</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
    `,
  }),
};

export const WithPlaceholder: Story = {
  render: () => ({
    template: `
      <div style="padding: 16px; max-width: 400px;">
        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Payment Terms</mat-label>
          <mat-select>
            <mat-option value="Net 30">Net 30</mat-option>
            <mat-option value="Net 45">Net 45</mat-option>
            <mat-option value="Net 60">Net 60</mat-option>
          </mat-select>
          <mat-hint>Select payment terms</mat-hint>
        </mat-form-field>
      </div>
    `,
  }),
};

export const WithValidation: Story = {
  render: () => ({
    template: `
      <div style="padding: 16px; max-width: 400px;">
        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Currency</mat-label>
          <mat-select required>
            <mat-option value="USD">USD</mat-option>
            <mat-option value="EUR">EUR</mat-option>
            <mat-option value="GBP">GBP</mat-option>
          </mat-select>
          <mat-error>Currency is required</mat-error>
        </mat-form-field>
      </div>
    `,
  }),
};

export const InFormRow: Story = {
  render: () => ({
    template: `
      <form class="dialog-form" style="padding: 16px; max-width: 600px;">
        <div class="form-row">
          <mat-form-field appearance="outline" nxFormField>
            <mat-label>Category</mat-label>
            <mat-select value="electronics">
              <mat-option value="electronics">Electronics</mat-option>
              <mat-option value="mechanical">Mechanical</mat-option>
              <mat-option value="safety">Safety</mat-option>
            </mat-select>
          </mat-form-field>
          <mat-form-field appearance="outline" nxFormField>
            <mat-label>Status</mat-label>
            <mat-select value="active">
              <mat-option value="active">Active</mat-option>
              <mat-option value="inactive">Inactive</mat-option>
            </mat-select>
          </mat-form-field>
        </div>
      </form>
      <p style="color: #666; font-size: 13px; padding: 0 16px;">
        Project convention: selects use <code>appearance="outline"</code> with <code>nxFormField</code> directive,
        placed inside <code>.form-row</code> for two-column layouts.
      </p>
    `,
  }),
};
