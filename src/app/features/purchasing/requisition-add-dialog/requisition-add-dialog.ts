import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-requisition-add-dialog',
  standalone: false,
  templateUrl: './requisition-add-dialog.html',
  styleUrl: './requisition-add-dialog.scss',
})
export class RequisitionAddDialogComponent {
  form: FormGroup;

  departments: string[] = ['Production', 'Maintenance', 'Safety', 'Engineering', 'Warehouse', 'Admin'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RequisitionAddDialogComponent>,
  ) {
    this.form = this.fb.group({
      description: ['', Validators.required],
      requestedBy: ['', Validators.required],
      department: ['', Validators.required],
      requiredDate: ['', Validators.required],
      estimatedCost: [null, [Validators.required, Validators.min(0)]],
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
