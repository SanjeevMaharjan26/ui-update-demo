import { AfterViewInit, Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export type TableColumn = GridColumn;

export interface GridColumn {
  key: string;
  header: string;
  sortable?: boolean;
  width?: string;
  type?: 'text' | 'status' | 'badge' | 'currency' | 'date' | 'number';
}

@Component({
  selector: 'nx-grid',
  standalone: false,
  templateUrl: './nx-grid.html',
  styleUrl: './nx-grid.scss',
})
export class NxGridComponent implements OnChanges, AfterViewInit {
  @Input() mode: 'simple' | 'advanced' = 'advanced';
  @Input() columns: GridColumn[] = [];
  @Input() data: any[] = [];
  @Input() showIndex = false;
  @Input() pageSize = 10;
  @Input() showSearch = false;
  @Input() searchPlaceholder = 'Search…';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<any>([]);

  get displayedColumns(): string[] {
    const cols = this.columns.map(c => c.key);
    return this.showIndex ? ['_index', ...cols] : cols;
  }

  ngOnChanges(): void {
    this.dataSource.data = this.data ?? [];
  }

  ngAfterViewInit(): void {
    if (this.mode === 'advanced') {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
