import { Component, Input } from '@angular/core';

export interface TableColumn {
  key: string;
  header: string;
  width?: string;
  type?: 'text' | 'status' | 'badge' | 'currency' | 'date';
}

@Component({
  selector: 'nx-table',
  standalone: false,
  templateUrl: './nx-table.html',
  styleUrl: './nx-table.scss',
})
export class NxTableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() showIndex = false;

  get displayedColumns(): string[] {
    const cols = this.columns.map(c => c.key);
    return this.showIndex ? ['_index', ...cols] : cols;
  }
}
