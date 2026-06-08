import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-add-dialog',
  standalone: false,
  templateUrl: './product-add-dialog.html',
  styleUrl: './product-add-dialog.scss',
})
export class ProductAddDialogComponent {
  form: FormGroup;

  statusOptions: string[] = ['active', 'inactive', 'draft'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProductAddDialogComponent>,
  ) {
    this.form = this.fb.group({
      sku: ['', Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      status: ['active', Validators.required],
      stockQty: [0, [Validators.required, Validators.min(0)]],
      reorderLevel: [0, [Validators.required, Validators.min(0)]],
      unitPrice: [0, [Validators.required, Validators.min(0)]],
      supplier: [''],
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
