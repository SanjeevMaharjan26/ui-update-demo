import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-supplier-add-dialog',
  standalone: false,
  templateUrl: './supplier-add-dialog.html',
  styleUrl: './supplier-add-dialog.scss',
})
export class SupplierAddDialogComponent {
  form: FormGroup;

  paymentTermsOptions: string[] = ['Net 30', 'Net 45', 'Net 60'];
  currencyOptions: string[] = ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'CHF', 'JPY'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SupplierAddDialogComponent>,
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      country: ['', Validators.required],
      city: [''],
      email: ['', Validators.email],
      phone: [''],
      website: [''],
      paymentTerms: ['Net 30'],
      currency: ['USD'],
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
