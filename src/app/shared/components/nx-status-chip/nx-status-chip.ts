import { Component, Input } from '@angular/core';

export type StatusType = 'draft' | 'pending' | 'approved' | 'complete' | 'rejected' | 'active' | 'inactive' | 'received';

@Component({
  selector: 'nx-status-chip',
  standalone: false,
  template: `<span class="nx-status-chip" [ngClass]="'nx-status--' + status">{{ status | statusLabel }}</span>`,
  styleUrl: './nx-status-chip.scss',
})
export class NxStatusChipComponent {
  @Input() status: StatusType = 'draft';
}
