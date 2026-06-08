import { Directive } from '@angular/core';

@Directive({
  selector: 'mat-form-field[nxFormField]',
  standalone: false,
  host: { 'class': 'nx-form-field' },
})
export class NxFormFieldDirective {}
