import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TableColumn } from '../../../shared/components/data-display/nx-grid/nx-grid';

interface AuditEntry { id: number; timestamp: string; user: string; action: string; module: string; details: string; ipAddress: string; }

@Component({ selector: 'app-audit-log', standalone: false, templateUrl: './audit-log.html', styleUrl: './audit-log.scss' })
export class AuditLogComponent {
  form!: FormGroup;
  entries: AuditEntry[] = [
    { id: 1, timestamp: '2026-06-03 09:15:22', user: 'jane.smith', action: 'APPROVE', module: 'Purchasing', details: 'Approved PO-2024-089', ipAddress: '192.168.1.42' },
    { id: 2, timestamp: '2026-06-03 08:47:10', user: 'mike.j', action: 'UPDATE', module: 'Inventory', details: 'Stock adjustment for SKU-00421, qty -10', ipAddress: '192.168.1.55' },
    { id: 3, timestamp: '2026-06-03 08:30:05', user: 'john.doe', action: 'LOGIN', module: 'Auth', details: 'User login', ipAddress: '192.168.1.10' },
    { id: 4, timestamp: '2026-06-02 17:30:00', user: 'alice.b', action: 'CREATE', module: 'Purchasing', details: 'Created requisition REQ-2024-112', ipAddress: '192.168.1.63' },
    { id: 5, timestamp: '2026-06-02 16:15:30', user: 'john.doe', action: 'UPDATE', module: 'Inventory', details: 'Updated category Electronics', ipAddress: '192.168.1.10' },
    { id: 6, timestamp: '2026-06-02 14:00:15', user: 'mike.j', action: 'REJECT', module: 'Purchasing', details: 'Rejected PO-2024-088', ipAddress: '192.168.1.55' },
    { id: 7, timestamp: '2026-06-02 11:30:00', user: 'jane.smith', action: 'CREATE', module: 'Suppliers', details: 'Onboarded supplier SUPP-099', ipAddress: '192.168.1.42' },
    { id: 8, timestamp: '2026-06-01 15:00:00', user: 'mike.j', action: 'UPDATE', module: 'Inventory', details: 'Receiving complete for PO-2024-080', ipAddress: '192.168.1.55' },
    { id: 9, timestamp: '2026-06-01 12:00:00', user: 'john.doe', action: 'UPDATE', module: 'Settings', details: 'Updated company timezone setting', ipAddress: '192.168.1.10' },
    { id: 10, timestamp: '2026-05-31 10:00:00', user: 'carol.w', action: 'CREATE', module: 'Inventory', details: 'Added new product SKU-00115', ipAddress: '192.168.1.88' },
  ];
  columns: TableColumn[] = [
    { key: 'timestamp', header: 'Timestamp', width: '160px' },
    { key: 'user', header: 'User', width: '120px' },
    { key: 'action', header: 'Action', type: 'badge', width: '90px' },
    { key: 'module', header: 'Module', width: '110px' },
    { key: 'details', header: 'Details' },
    { key: 'ipAddress', header: 'IP Address', width: '120px' },
  ];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({ user: [''], module: [''], dateFrom: [''], dateTo: [''] });
  }
}
