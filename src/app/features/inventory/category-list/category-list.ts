import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../models';
import { InventoryService } from '../inventory.service';
import { TableColumn } from '../../../shared/components/data-display/nx-grid/nx-grid';
import { CategoryAddDialogComponent } from '../category-add-dialog/category-add-dialog';

@Component({
  selector: 'app-category-list',
  standalone: false,
  templateUrl: './category-list.html',
  styleUrl: './category-list.scss',
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  columns: TableColumn[] = [
    { key: 'id', header: '#', width: '60px' },
    { key: 'name', header: 'Category Name' },
    { key: 'description', header: 'Description' },
    { key: 'productCount', header: 'Products', width: '100px' },
  ];

  constructor(
    private service: InventoryService,
    private dialog: MatDialog,
  ) {}
  ngOnInit(): void { this.service.getCategories().subscribe(c => (this.categories = c)); }

  openAddCategoryDialog(): void {
    const ref = this.dialog.open(CategoryAddDialogComponent, { width: '500px' });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.service.addCategory(result).subscribe(() => {
          this.service.getCategories().subscribe(c => (this.categories = c));
        });
      }
    });
  }
}
