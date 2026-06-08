import { Component, Input } from '@angular/core';

export interface Breadcrumb {
  label: string;
  route?: string;
}

@Component({
  selector: 'nx-page-header',
  standalone: false,
  templateUrl: './nx-page-header.html',
  styleUrl: './nx-page-header.scss',
})
export class NxPageHeaderComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() breadcrumbs: Breadcrumb[] = [];
}
