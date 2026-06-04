import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({ selector: 'app-custom-report', standalone: false, templateUrl: './custom-report.html', styleUrl: './custom-report.scss' })
export class CustomReportComponent {
  form!: FormGroup;
  availableFields = [
    { key: 'product_sku', label: 'Product SKU', module: 'Inventory' },
    { key: 'product_name', label: 'Product Name', module: 'Inventory' },
    { key: 'stock_qty', label: 'Stock Quantity', module: 'Inventory' },
    { key: 'supplier_name', label: 'Supplier Name', module: 'Suppliers' },
    { key: 'po_number', label: 'PO Number', module: 'Purchasing' },
    { key: 'po_total', label: 'PO Total Amount', module: 'Purchasing' },
    { key: 'po_status', label: 'PO Status', module: 'Purchasing' },
    { key: 'order_date', label: 'Order Date', module: 'Purchasing' },
  ];
  selectedFields: string[] = [];
  previewData: any[] = [];

  toggleField(key: string): void {
    const idx = this.selectedFields.indexOf(key);
    if (idx > -1) this.selectedFields.splice(idx, 1);
    else this.selectedFields.push(key);
  }

  isSelected(key: string): boolean { return this.selectedFields.includes(key); }

  preview(): void {
    this.previewData = [
      { product_sku: 'SKU-00100', product_name: 'Industrial Bearing 6205', stock_qty: 245, supplier_name: 'Acme Parts Ltd', po_number: 'PO-2024-089', po_total: 3450, po_status: 'approved', order_date: '2026-05-28' },
      { product_sku: 'SKU-00103', product_name: 'Electric Motor 2HP', stock_qty: 12, supplier_name: 'ElectroPower Inc', po_number: 'PO-2024-086', po_total: 4800, po_status: 'pending', order_date: '2026-06-01' },
    ];
  }
}
