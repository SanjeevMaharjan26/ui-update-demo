import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TableColumn } from '../../../shared/components/data-display/nx-grid/nx-grid';

@Component({ selector: 'app-purchase-report', standalone: false, templateUrl: './purchase-report.html', styleUrl: './purchase-report.scss' })
export class PurchaseReportComponent implements OnInit {
  form!: FormGroup;
  hasRun = false;
  summaryData = [
    { poNumber: 'PO-2024-089', supplier: 'Acme Parts Ltd', status: 'approved', orderDate: '2026-05-28', totalAmount: 3450.00 },
    { poNumber: 'PO-2024-087', supplier: 'FastFix Supply', status: 'received', orderDate: '2026-05-20', totalAmount: 540.00 },
    { poNumber: 'PO-2024-086', supplier: 'ElectroPower Inc', status: 'pending', orderDate: '2026-06-01', totalAmount: 4800.00 },
    { poNumber: 'PO-2024-085', supplier: 'Acme Parts Ltd', status: 'approved', orderDate: '2026-05-15', totalAmount: 1890.00 },
    { poNumber: 'PO-2024-081', supplier: 'HydroTech Corp', status: 'received', orderDate: '2026-05-01', totalAmount: 5400.00 },
  ];
  columns: TableColumn[] = [
    { key: 'poNumber', header: 'PO Number', width: '140px' },
    { key: 'supplier', header: 'Supplier' },
    { key: 'status', header: 'Status', type: 'status', width: '110px' },
    { key: 'orderDate', header: 'Order Date', width: '110px' },
    { key: 'totalAmount', header: 'Amount', type: 'currency', width: '120px' },
  ];
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({ dateFrom: ['2026-05-01'], dateTo: ['2026-06-03'], supplier: [''], status: [''] });
  }
  runReport(): void { this.hasRun = true; }
  export(): void { /* mock */ }
}
