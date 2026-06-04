import { Component } from '@angular/core';
import { NavItem } from './nav-item';

@Component({
  selector: 'app-top-nav',
  standalone: false,
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.scss',
})
export class TopNavComponent {
  navItems: NavItem[] = [
    {
      label: 'Inventory',
      children: [
        { label: 'Products', route: '/inventory/products' },
        { label: 'Stock Levels', route: '/inventory/stock' },
        { label: 'Categories', route: '/inventory/categories' },
        { label: 'Adjustments', route: '/inventory/adjustments' },
      ],
    },
    {
      label: 'Purchasing',
      children: [
        { label: 'Purchase Orders', route: '/purchasing/orders' },
        { label: 'Requisitions', route: '/purchasing/requisitions' },
        { label: 'Approvals', route: '/purchasing/approvals' },
        { label: 'Receiving', route: '/purchasing/receiving' },
      ],
    },
    {
      label: 'Suppliers',
      children: [
        { label: 'Supplier List', route: '/suppliers/list' },
        { label: 'Contacts', route: '/suppliers/contacts' },
        { label: 'Performance', route: '/suppliers/performance' },
      ],
    },
    {
      label: 'Reports',
      children: [
        { label: 'Inventory Reports', route: '/reports/inventory' },
        { label: 'Purchase Reports', route: '/reports/purchasing' },
        { label: 'Supplier Reports', route: '/reports/suppliers' },
        { label: 'Custom Reports', route: '/reports/custom' },
      ],
    },
    {
      label: 'Settings',
      children: [
        { label: 'General', route: '/settings/general' },
        { label: 'Users & Roles', route: '/settings/users' },
        { label: 'Audit Log', route: '/settings/audit' },
      ],
    },
  ];

  notificationCount = 3;
  currentUser = { name: 'John Doe', initials: 'JD' };
}
