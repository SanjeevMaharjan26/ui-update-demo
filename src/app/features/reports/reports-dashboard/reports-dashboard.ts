import { Component } from '@angular/core';

interface ReportCard {
  title: string; description: string; icon: string; route: string; category: string;
}

@Component({ selector: 'app-reports-dashboard', standalone: false, templateUrl: './reports-dashboard.html', styleUrl: './reports-dashboard.scss' })
export class ReportsDashboardComponent {
  reportCards: ReportCard[] = [
    { title: 'Inventory Summary', description: 'Current stock levels, low stock and valuation', icon: 'inventory_2', route: '/reports/inventory', category: 'Inventory' },
    { title: 'Stock Movement', description: 'Inbound and outbound stock history', icon: 'swap_vert', route: '/reports/inventory', category: 'Inventory' },
    { title: 'Purchase Orders', description: 'PO history, spend and status summary', icon: 'shopping_cart', route: '/reports/purchasing', category: 'Purchasing' },
    { title: 'Spend Analysis', description: 'Purchasing spend by category and supplier', icon: 'bar_chart', route: '/reports/purchasing', category: 'Purchasing' },
    { title: 'Supplier Performance', description: 'Delivery, quality and rating metrics', icon: 'business', route: '/reports/suppliers', category: 'Suppliers' },
    { title: 'Supplier Spend', description: 'Spend breakdown by supplier', icon: 'account_balance_wallet', route: '/reports/suppliers', category: 'Suppliers' },
    { title: 'Custom Report', description: 'Build a custom report from any data field', icon: 'tune', route: '/reports/custom', category: 'Custom' },
    { title: 'Audit Trail', description: 'System-wide audit log report', icon: 'history', route: '/settings/audit', category: 'System' },
  ];
}
