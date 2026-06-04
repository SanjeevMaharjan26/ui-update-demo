import { Component } from '@angular/core';

@Component({
  selector: 'nx-action-bar',
  standalone: false,
  template: `<div class="nx-action-bar"><ng-content></ng-content></div>`,
  styleUrl: './nx-action-bar.scss',
})
export class NxActionBarComponent {}
