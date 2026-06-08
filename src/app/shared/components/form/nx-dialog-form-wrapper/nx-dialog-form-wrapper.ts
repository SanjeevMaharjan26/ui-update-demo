import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nx-dialog-form-wrapper',
  standalone: false,
  templateUrl: './nx-dialog-form-wrapper.html',
  styleUrl: './nx-dialog-form-wrapper.scss',
})
export class NxDialogFormWrapperComponent {
  @Input() title = '';
  @Input() saveLabel = 'Save';
  @Input() cancelLabel = 'Cancel';
  @Input() saveDisabled = false;
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
}
