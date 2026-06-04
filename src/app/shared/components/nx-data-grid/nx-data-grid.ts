import { AfterViewInit, Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface GridColumn {
  key: string;
  header: string;
  sortable?: boolean;
  width?: string;
  type?: 'text' | 'status' | 'badge' | 'currency' | 'date' | 'number';
}

@Component({
  selector: 'nx-data-grid',
  standalone: false,
  templateUrl: './nx-data-grid.html',
  styleUrl: './nx-data-grid.scss',
})
export class NxDataGridComponent implements OnChanges, AfterViewInit {
  @Input() columns: GridColumn[] = [];
  @Input() data: any[] = [];
  @Input() pageSize = 10;
  @Input() showSearch = false;
  @Input() searchPlaceholder = 'Search…';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<any>([]);

  get displayedColumns(): string[] {
    return this.columns.map(c => c.key);
  }

  ngOnChanges(): void {
    this.dataSource.data = this.data ?? [];
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
