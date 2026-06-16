import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

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
  @Input() showSelection = false;
  @Input() trackBy: (row: any) => any = (row: any) => row;

  @Output() selectionChange = new EventEmitter<any[]>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<any>([]);
  selection = new SelectionModel<any>(true, []);

  get displayedColumns(): string[] {
    const cols = this.columns.map(c => c.key);
    const prefix = this.showIndex ? ['_index'] : [];
    const selection = this.showSelection ? ['_selection'] : [];
    return [...selection, ...prefix, ...cols];
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

  isAllSelected(): boolean {
    return this.selection.selected.length === this.dataSource.data.length;
  }

  toggleAllRows(): void {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.selection.select(...this.dataSource.data);
    }
    this.selectionChange.emit(this.selection.selected);
  }

  toggleRow(row: any): void {
    this.selection.toggle(row);
    this.selectionChange.emit(this.selection.selected);
  }
}
