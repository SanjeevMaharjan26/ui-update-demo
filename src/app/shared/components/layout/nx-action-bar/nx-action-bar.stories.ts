import type { Meta, StoryObj } from '@storybook/angular';
import { NxActionBarComponent } from './nx-action-bar';

const meta: Meta<NxActionBarComponent> = {
  title: 'Layout/NxActionBar',
  component: NxActionBarComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<NxActionBarComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <nx-action-bar>
        <button mat-raised-button color="primary"><mat-icon>add</mat-icon> New</button>
        <button mat-stroked-button><mat-icon>download</mat-icon> Export</button>
      </nx-action-bar>
    `,
  }),
};
export const WithFilter: Story = {
  render: () => ({
    template: `
      <nx-action-bar>
        <button mat-raised-button color="primary"><mat-icon>add</mat-icon> New</button>
        <span class="flex-1"></span>
        <mat-form-field appearance="outline" class="filter-field">
          <mat-label>Filter</mat-label>
          <mat-select>
            <mat-option value="">All</mat-option>
          </mat-select>
        </mat-form-field>
      </nx-action-bar>
    `,
  }),
};
