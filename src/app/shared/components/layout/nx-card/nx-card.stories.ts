import type { Meta, StoryObj } from '@storybook/angular';
import { NxCardComponent } from './nx-card';

const meta: Meta<NxCardComponent> = {
  title: 'Layout/NxCard',
  component: NxCardComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    padding: { control: 'select', options: ['none', 'sm', 'md'] },
  },
};

export default meta;
type Story = StoryObj<NxCardComponent>;

export const Default: Story = {
  render: () => ({
    template: `<nx-card title="Card Title"><p>Card content goes here.</p></nx-card>`,
  }),
};
export const NoPadding: Story = {
  render: () => ({
    template: `<nx-card title="No Padding" padding="none"><p>Card content touching edges.</p></nx-card>`,
  }),
};
export const WithDivider: Story = {
  render: () => ({
    template: `<nx-card title="Settings"><mat-divider></mat-divider><p>Content after divider.</p></nx-card>`,
  }),
};
export const InventoryNewDesign: Story = {
  decorators: [(storyFn) => { const story = storyFn(); return { ...story, template: `<div class="inventory-module" style="padding:24px">${story.template}</div>` }; }],
  render: () => ({
    template: `<nx-card title="Card Title"><p>Card content goes here.</p></nx-card>`,
  }),
};
