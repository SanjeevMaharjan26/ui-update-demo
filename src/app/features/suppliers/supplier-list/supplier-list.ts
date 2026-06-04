import { Component, OnInit } from '@angular/core';
import { Supplier } from '../models';
import { SuppliersService } from '../suppliers.service';
import { GridColumn } from '../../../shared/components/nx-data-grid/nx-data-grid';

@Component({ selector: 'app-supplier-list', standalone: false, templateUrl: './supplier-list.html', styleUrl: './supplier-list.scss' })
export class SupplierListComponent implements OnInit {
  suppliers: Supplier[] = [];
  columns: GridColumn[] = [
    { key: 'code', header: 'Code', sortable: true, width: '110px' },
    { key: 'name', header: 'Supplier Name', sortable: true },
    { key: 'category', header: 'Category', sortable: true, width: '140px' },
    { key: 'country', header: 'Country', sortable: true, width: '130px' },
    { key: 'status', header: 'Status', type: 'status', sortable: true, width: '100px' },
    { key: 'rating', header: 'Rating', sortable: true, width: '80px' },
    { key: 'paymentTerms', header: 'Terms', width: '90px' },
  ];
  constructor(private service: SuppliersService) {}
  ngOnInit(): void { this.service.getSuppliers().subscribe(s => this.suppliers = s); }
}
