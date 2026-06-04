import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-form-field',
  standalone: false,
  templateUrl: './nx-form-field-wrapper.html',
  styleUrl: './nx-form-field-wrapper.scss',
})
export class NxFormFieldWrapperComponent {
  @Input() label = '';
  @Input() hint = '';
  @Input() required = false;
}
