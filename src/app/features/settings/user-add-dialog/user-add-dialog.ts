import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-add-dialog',
  standalone: false,
  templateUrl: './user-add-dialog.html',
  styleUrl: './user-add-dialog.scss',
})
export class UserAddDialogComponent {
  form: FormGroup;

  roleOptions: string[] = ['admin', 'manager', 'operator', 'viewer'];
  statusOptions: string[] = ['active', 'inactive'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserAddDialogComponent>,
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['operator', Validators.required],
      status: ['active', Validators.required],
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
