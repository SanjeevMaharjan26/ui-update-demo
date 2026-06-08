import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-card',
  standalone: false,
  templateUrl: './nx-card.html',
  styleUrl: './nx-card.scss',
})
export class NxCardComponent {
  @Input() title = '';
  @Input() padding: 'none' | 'sm' | 'md' = 'md';
}
