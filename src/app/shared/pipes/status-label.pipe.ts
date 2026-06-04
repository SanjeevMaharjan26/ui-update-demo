import { Pipe, PipeTransform } from '@angular/core';
import { StatusType } from '../components/nx-status-chip/nx-status-chip';

const STATUS_LABELS: Record<StatusType, string> = {
  draft: 'Draft',
  pending: 'Pending',
  approved: 'Approved',
  complete: 'Complete',
  received: 'Received',
  rejected: 'Rejected',
  active: 'Active',
  inactive: 'Inactive',
};

@Pipe({ name: 'statusLabel', standalone: false })
export class StatusLabelPipe implements PipeTransform {
  transform(value: StatusType | string): string {
    return STATUS_LABELS[value as StatusType] ?? value;
  }
}
