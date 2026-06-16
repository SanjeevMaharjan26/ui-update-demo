import type { Meta, StoryObj } from '@storybook/angular';
import { NxSkeletonComponent } from './nx-skeleton';

const meta: Meta<NxSkeletonComponent> = {
  title: 'DataDisplay/NxSkeleton',
  component: NxSkeletonComponent,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['card', 'table', 'text', 'circle', 'rect'] },
    count: { control: { type: 'number', min: 1, max: 10 } },
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<NxSkeletonComponent>;

export const Default: Story = {
  render: () => ({
    template: `<nx-skeleton type="text" [count]="5"></nx-skeleton>`,
  }),
};

export const CardSkeleton: Story = {
  render: () => ({
    template: `<nx-skeleton type="card" [count]="3"></nx-skeleton>`,
  }),
};

export const TableSkeleton: Story = {
  render: () => ({
    template: `<nx-skeleton type="table"></nx-skeleton>`,
  }),
};

export const CircleSkeleton: Story = {
  render: () => ({
    template: `<nx-skeleton type="circle" [count]="4" width="48px" height="48px"></nx-skeleton>`,
  }),
};

export const RectSkeleton: Story = {
  render: () => ({
    template: `<nx-skeleton type="rect" [count]="2" width="100%" height="120px"></nx-skeleton>`,
  }),
};

export const InventoryNewDesign: Story = {
  decorators: [(storyFn) => { const story = storyFn(); return { ...story, template: `<div class="inventory-module" style="padding:24px">${story.template}</div>` }; }],
  render: () => ({
    template: `<nx-skeleton type="card" [count]="2"></nx-skeleton>`,
  }),
};
