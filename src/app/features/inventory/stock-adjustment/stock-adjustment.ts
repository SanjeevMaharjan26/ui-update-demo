import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockAdjustment } from '../models';
import { InventoryService } from '../inventory.service';
import { TableColumn } from '../../../shared/components/nx-table/nx-table';

@Component({
  selector: 'app-stock-adjustment',
  standalone: false,
  templateUrl: './stock-adjustment.html',
  styleUrl: './stock-adjustment.scss',
})
export class StockAdjustmentComponent implements OnInit {
  form!: FormGroup;
  adjustments: StockAdjustment[] = [];

  columns: TableColumn[] = [
    { key: 'date', header: 'Date', width: '110px' },
    { key: 'productName', header: 'Product' },
    { key: 'type', header: 'Type', width: '90px' },
    { key: 'quantity', header: 'Qty', width: '70px' },
    { key: 'reason', header: 'Reason' },
    { key: 'performedBy', header: 'By', width: '130px' },
  ];

  reasons = ['Damaged goods', 'Delivery received', 'Consumed in production', 'Issued to department', 'Count correction', 'Returned to supplier'];

  constructor(private fb: FormBuilder, private service: InventoryService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      productId: ['', Validators.required],
      type:      ['decrease', Validators.required],
      quantity:  [1, [Validators.required, Validators.min(1)]],
      reason:    ['', Validators.required],
      notes:     [''],
    });
    this.service.getAdjustments().subscribe(a => (this.adjustments = a));
  }

  submit(): void { /* mock submit */ }
}
