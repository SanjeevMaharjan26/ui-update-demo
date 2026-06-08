import { Component, Input } from '@angular/core';
import { SupplierContact } from '../models';
import { TableColumn } from '../../../shared/components/data-display/nx-grid/nx-grid';

@Component({ selector: 'app-supplier-contacts', standalone: false, templateUrl: './supplier-contacts.html', styleUrl: './supplier-contacts.scss' })
export class SupplierContactsComponent {
  @Input() supplierId = 0;
  @Input() contacts: SupplierContact[] = [];

  columns: TableColumn[] = [
    { key: 'name', header: 'Name' },
    { key: 'role', header: 'Role' },
    { key: 'email', header: 'Email' },
    { key: 'phone', header: 'Phone', width: '140px' },
  ];
}
