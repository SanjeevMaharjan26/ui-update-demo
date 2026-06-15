import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Patterns/Accessibility',
  tags: ['autodocs'],
  parameters: {
    docs: { source: { format: true } },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          { id: 'label', enabled: true },
          { id: 'button-name', enabled: true },
          { id: 'color-contrast', enabled: true },
          { id: 'aria-valid-attr', enabled: true },
          { id: 'aria-props', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const FormFields: Story = {
  parameters: {
    a11y: {
      element: '.a11y-check',
    },
  },
  render: () => ({
    template: `
      <div class="a11y-check" style="padding: 16px; max-width: 400px; display: flex; flex-direction: column; gap: 16px;">
        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Full Name</mat-label>
          <input matInput placeholder="e.g. Jane Doe" aria-describedby="name-hint">
          <mat-hint id="name-hint">Enter your first and last name</mat-hint>
        </mat-form-field>

        <mat-form-field appearance="outline" nxFormField>
          <mat-label>Email</mat-label>
          <input matInput type="email" placeholder="user@example.com" aria-required="true">
          <mat-error>Email is required</mat-error>
        </mat-form-field>

        <button mat-raised-button color="primary" aria-label="Submit the form">
          Submit
        </button>
      </div>
    `,
  }),
};

export const SemanticStructure: Story = {
  render: () => ({
    template: `
      <div style="padding: 16px; max-width: 600px;">
        <div role="heading" aria-level="1" style="font-size: 24px; font-weight: 500; margin-bottom: 16px;">
          User Profile
        </div>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          <mat-form-field appearance="outline" nxFormField>
            <mat-label>Display Name</mat-label>
            <input matInput value="Jane Doe">
          </mat-form-field>

          <div style="display: flex; gap: 12px; align-items: center;">
            <button mat-raised-button color="primary" aria-label="Save profile changes">
              <mat-icon>save</mat-icon> Save
            </button>
            <button mat-stroked-button aria-label="Cancel and return">
              Cancel
            </button>
          </div>
        </div>
      </div>
    `,
  }),
};

export const BadPractices: Story = {
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: 'label', enabled: true },
          { id: 'button-name', enabled: true },
          { id: 'color-contrast', enabled: true },
        ],
      },
    },
  },
  render: () => ({
    template: `
      <div style="padding: 16px; max-width: 400px; background: #fff3cd; border-left: 4px solid #ffc107;">
        <p style="margin: 0 0 12px; font-size: 13px;">
          <strong>Warning:</strong> These patterns fail a11y audits. Check the A11y panel.
        </p>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <mat-form-field appearance="outline" nxFormField>
            <input matInput placeholder="Missing label">
          </mat-form-field>

          <button mat-raised-button color="primary">
            <mat-icon>check</mat-icon>
          </button>
        </div>
      </div>
    `,
  }),
};
