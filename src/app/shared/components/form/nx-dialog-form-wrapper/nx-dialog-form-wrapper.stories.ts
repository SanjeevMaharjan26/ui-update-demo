import type { Meta, StoryObj } from '@storybook/angular';
import { NxDialogFormWrapperComponent } from './nx-dialog-form-wrapper';

const meta: Meta<NxDialogFormWrapperComponent> = {
  title: 'Form/NxDialogFormWrapper',
  component: NxDialogFormWrapperComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    saveLabel: { control: 'text' },
    cancelLabel: { control: 'text' },
    saveDisabled: { control: 'boolean' },
    save: { action: 'save' },
    cancel: { action: 'cancel' },
  },
};

export default meta;
type Story = StoryObj<NxDialogFormWrapperComponent>;

export const Default: Story = {
  args: { title: 'Add Item', saveDisabled: false },
  render: args => ({
    props: args,
    template: `
      <nx-dialog-form-wrapper
        title="${args.title}"
        [saveDisabled]="${args.saveDisabled}"
        (save)="save()" (cancel)="cancel()">
        <p>Form content goes here.</p>
      </nx-dialog-form-wrapper>
    `,
  }),
};
export const SaveDisabled: Story = {
  args: { title: 'Add Item', saveDisabled: true },
  render: args => ({
    props: args,
    template: `
      <nx-dialog-form-wrapper
        title="${args.title}"
        [saveDisabled]="true"
        (save)="save()" (cancel)="cancel()">
        <p>Form with invalid state.</p>
      </nx-dialog-form-wrapper>
    `,
  }),
};
export const InventoryNewDesign: Story = {
  decorators: [(storyFn) => { const story = storyFn(); return { ...story, template: `<div class="inventory-module" style="padding:24px">${story.template}</div>` }; }],
  args: { title: 'Add Item', saveDisabled: false },
  render: args => ({
    props: args,
    template: `
      <nx-dialog-form-wrapper
        title="${args.title}"
        [saveDisabled]="${args.saveDisabled}"
        (save)="save()" (cancel)="cancel()">
        <p>Form content goes here.</p>
      </nx-dialog-form-wrapper>
    `,
  }),
};
