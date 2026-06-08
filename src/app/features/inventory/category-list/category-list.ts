import { Component, OnInit } from '@angular/core';
import { Category } from '../models';
import { InventoryService } from '../inventory.service';
import { TableColumn } from '../../../shared/components/data-display/nx-grid/nx-grid';

@Component({
  selector: 'app-category-list',
  standalone: false,
  templateUrl: './category-list.html',
  styleUrl: './category-list.scss',
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  showAddForm = false;

  columns: TableColumn[] = [
    { key: 'id', header: '#', width: '60px' },
    { key: 'name', header: 'Category Name' },
    { key: 'description', header: 'Description' },
    { key: 'productCount', header: 'Products', width: '100px' },
  ];

  constructor(private service: InventoryService) {}
  ngOnInit(): void { this.service.getCategories().subscribe(c => (this.categories = c)); }
  toggleAdd(): void { this.showAddForm = !this.showAddForm; }
}
