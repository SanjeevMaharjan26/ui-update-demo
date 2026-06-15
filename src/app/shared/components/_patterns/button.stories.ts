import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Patterns/Button',
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
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; padding: 16px;">
        <button mat-button>Basic</button>
        <button mat-raised-button color="primary">Raised Primary</button>
        <button mat-raised-button color="accent">Raised Accent</button>
        <button mat-stroked-button>Stroked</button>
        <button mat-flat-button color="primary">Flat Primary</button>
        <button mat-icon-button color="primary"><mat-icon>add</mat-icon></button>
        <button mat-mini-fab color="primary"><mat-icon>edit</mat-icon></button>
        <button mat-fab color="primary"><mat-icon>save</mat-icon></button>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; padding: 16px;">
        <button mat-button disabled>Basic</button>
        <button mat-raised-button color="primary" disabled>Raised</button>
        <button mat-stroked-button disabled>Stroked</button>
        <button mat-flat-button color="primary" disabled>Flat</button>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; padding: 16px;">
        <button mat-button color="primary" style="line-height: 28px; font-size: 12px;">Small</button>
        <button mat-raised-button color="primary">Default</button>
        <button mat-raised-button color="primary" style="padding: 4px 32px; font-size: 16px;">Large</button>
      </div>
    `,
  }),
};

export const WithIcons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; padding: 16px;">
        <button mat-raised-button color="primary"><mat-icon>save</mat-icon> Save</button>
        <button mat-stroked-button><mat-icon>cancel</mat-icon> Cancel</button>
        <button mat-button color="warn"><mat-icon>delete</mat-icon> Delete</button>
        <button mat-stroked-button color="primary"><mat-icon>add</mat-icon> Add Item</button>
      </div>
    `,
  }),
};

export const InventoryNewDesign: Story = {
  decorators: [(storyFn) => { const story = storyFn(); return { ...story, template: `<div class="inventory-module" style="padding:24px">${story.template}</div>` }; }],
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; padding: 16px;">
        <button mat-button>Basic</button>
        <button mat-raised-button color="primary">Raised Primary</button>
        <button mat-raised-button color="accent">Raised Accent</button>
        <button mat-stroked-button>Stroked</button>
        <button mat-flat-button color="primary">Flat Primary</button>
        <button mat-icon-button color="primary"><mat-icon>add</mat-icon></button>
        <button mat-mini-fab color="primary"><mat-icon>edit</mat-icon></button>
        <button mat-fab color="primary"><mat-icon>save</mat-icon></button>
      </div>
    `,
  }),
};

export const InActionBar: Story = {
  render: () => ({
    template: `
      <div style="padding: 16px;">
        <div style="display: flex; align-items: center; gap: 8px; padding: 12px 16px; background: #f5f5f5; border-radius: 4px; border: 1px solid #e0e0e0;">
          <span style="font-weight: 500; margin-right: auto;">Product List</span>
          <button mat-stroked-button>Export</button>
          <button mat-raised-button color="primary">+ Add Product</button>
        </div>
        <p style="color: #666; font-size: 13px; margin-top: 8px;">
          Project convention: nx-action-bar wraps this pattern with nx-page-header.
          Buttons use native Material selectors — no wrapper components.
        </p>
      </div>
    `,
  }),
};
