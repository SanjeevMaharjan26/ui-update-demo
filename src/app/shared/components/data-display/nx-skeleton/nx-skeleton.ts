import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-skeleton',
  standalone: false,
  templateUrl: './nx-skeleton.html',
  styleUrl: './nx-skeleton.scss',
})
export class NxSkeletonComponent {
  @Input() type: 'card' | 'table' | 'text' | 'circle' | 'rect' = 'text';
  @Input() count: number = 1;
  @Input() width: string = '100%';
  @Input() height: string = '16px';
}
