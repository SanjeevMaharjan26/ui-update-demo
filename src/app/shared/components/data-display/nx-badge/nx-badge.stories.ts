import type { Meta, StoryObj } from '@storybook/angular';
import { NxBadgeComponent } from './nx-badge';

const meta: Meta<NxBadgeComponent> = {
  title: 'Data Display/NxBadge',
  component: NxBadgeComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    color: { control: 'select', options: ['primary', 'accent', 'warn', 'default', 'info'] },
  },
};

export default meta;
type Story = StoryObj<NxBadgeComponent>;

export const Default: Story = { args: { label: 'New' } };
export const WarnColor: Story = { args: { label: 'Urgent', color: 'warn' } };
export const AccentColor: Story = { args: { label: 'Updated', color: 'accent' } };
export const InfoColor: Story = { args: { label: 'Info', color: 'info' } };
export const PrimaryColor: Story = { args: { label: 'Featured', color: 'primary' } };
