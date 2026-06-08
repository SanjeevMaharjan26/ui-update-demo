import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TableColumn } from '../../../shared/components/data-display/nx-grid/nx-grid';

interface ReportRow { sku: string; name: string; category: string; stockQty: number; reorderLevel: number; unitPrice: number; stockValue: number; }

@Component({ selector: 'app-inventory-report', standalone: false, templateUrl: './inventory-report.html', styleUrl: './inventory-report.scss' })
export class InventoryReportComponent implements OnInit {
  form!: FormGroup;
  results: ReportRow[] = [];
  hasRun = false;

  columns: TableColumn[] = [
    { key: 'sku', header: 'SKU', width: '110px' },
    { key: 'name', header: 'Product Name' },
    { key: 'category', header: 'Category', width: '130px' },
    { key: 'stockQty', header: 'Stock Qty', width: '100px' },
    { key: 'reorderLevel', header: 'Reorder', width: '90px' },
    { key: 'unitPrice', header: 'Unit Price', type: 'currency', width: '110px' },
    { key: 'stockValue', header: 'Stock Value', type: 'currency', width: '120px' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      category: [''],
      status: ['active'],
      lowStockOnly: [false],
    });
  }

  runReport(): void {
    this.results = [
      { sku: 'SKU-00100', name: 'Industrial Bearing 6205', category: 'Bearings', stockQty: 245, reorderLevel: 50, unitPrice: 12.50, stockValue: 3062.50 },
      { sku: 'SKU-00102', name: 'Steel Hex Bolt M12x50', category: 'Fasteners', stockQty: 1200, reorderLevel: 200, unitPrice: 0.45, stockValue: 540.00 },
      { sku: 'SKU-00103', name: 'Electric Motor 2HP', category: 'Motors', stockQty: 12, reorderLevel: 5, unitPrice: 320.00, stockValue: 3840.00 },
      { sku: 'SKU-00105', name: 'Lubricant Grease 1kg', category: 'Lubricants', stockQty: 88, reorderLevel: 30, unitPrice: 22.00, stockValue: 1936.00 },
      { sku: 'SKU-00106', name: 'Safety Gloves L', category: 'Safety', stockQty: 150, reorderLevel: 50, unitPrice: 6.50, stockValue: 975.00 },
    ];
    this.hasRun = true;
  }

  export(): void { /* mock export */ }
}
