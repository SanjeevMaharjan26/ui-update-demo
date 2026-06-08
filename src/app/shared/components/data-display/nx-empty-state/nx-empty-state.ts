import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-empty-state',
  standalone: false,
  templateUrl: './nx-empty-state.html',
  styleUrl: './nx-empty-state.scss',
})
export class NxEmptyStateComponent {
  @Input() message = 'No data available';
  @Input() icon = 'inbox';
  @Input() actionLabel = '';
}
