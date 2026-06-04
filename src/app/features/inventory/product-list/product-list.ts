import { Component, OnInit } from '@angular/core';
import { Product } from '../models';
import { InventoryService } from '../inventory.service';
import { GridColumn } from '../../../shared/components/nx-data-grid/nx-data-grid';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProducts: Product[] = [];

  columns: GridColumn[] = [
    { key: 'sku', header: 'SKU', sortable: true, width: '120px' },
    { key: 'name', header: 'Product Name', sortable: true },
    { key: 'category', header: 'Category', sortable: true, width: '130px' },
    { key: 'status', header: 'Status', type: 'status', sortable: true, width: '100px' },
    { key: 'stockQty', header: 'Stock Qty', sortable: true, width: '100px', type: 'number' },
    { key: 'reorderLevel', header: 'Reorder', width: '90px', type: 'number' },
    { key: 'unitPrice', header: 'Unit Price', type: 'currency', sortable: true, width: '110px' },
    { key: 'supplier', header: 'Supplier', sortable: true },
  ];

  constructor(private service: InventoryService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe(p => (this.products = p));
  }
}
