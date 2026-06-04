import { Component, Input } from '@angular/core';

export type BadgeColor = 'primary' | 'accent' | 'warn' | 'default' | 'info';

@Component({
  selector: 'nx-badge',
  standalone: false,
  template: `<span class="nx-badge" [ngClass]="'nx-badge--' + color">{{ label }}</span>`,
  styleUrl: './nx-badge.scss',
})
export class NxBadgeComponent {
  @Input() label = '';
  @Input() color: BadgeColor = 'default';
}
