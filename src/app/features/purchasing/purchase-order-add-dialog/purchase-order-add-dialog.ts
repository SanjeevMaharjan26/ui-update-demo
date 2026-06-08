import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-purchase-order-add-dialog',
  standalone: false,
  templateUrl: './purchase-order-add-dialog.html',
  styleUrl: './purchase-order-add-dialog.scss',
})
export class PurchaseOrderAddDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PurchaseOrderAddDialogComponent>,
  ) {
    this.form = this.fb.group({
      supplierName: ['', Validators.required],
      orderDate: [new Date().toISOString().split('T')[0], Validators.required],
      expectedDate: ['', Validators.required],
      notes: [''],
    });
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.dialogRef.close(this.form.value);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
