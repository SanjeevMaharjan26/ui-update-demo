import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-layout',
  standalone: false,
  template: '<router-outlet></router-outlet>',
  host: { class: 'inventory-module' },
})
export class InventoryLayoutComponent {}
