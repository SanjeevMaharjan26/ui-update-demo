import { Component } from '@angular/core';

interface KpiCard {
  label: string;
  value: string | number;
  icon: string;
  trend: 'up' | 'down' | 'neutral';
  trendValue: string;
  color: string;
}

interface ActivityItem {
  id: number;
  action: string;
  module: string;
  user: string;
  timestamp: string;
  status: 'complete' | 'pending' | 'rejected';
}

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent {
  kpiCards: KpiCard[] = [
    { label: 'Total Products', value: 1248, icon: 'inventory_2', trend: 'up', trendValue: '+12 this month', color: '#455a64' },
    { label: 'Open Purchase Orders', value: 34, icon: 'shopping_cart', trend: 'up', trendValue: '+5 this week', color: '#1565c0' },
    { label: 'Active Suppliers', value: 87, icon: 'business', trend: 'neutral', trendValue: 'No change', color: '#2e7d32' },
    { label: 'Low Stock Alerts', value: 18, icon: 'warning', trend: 'down', trendValue: '3 critical', color: '#c62828' },
  ];

  recentActivity: ActivityItem[] = [
    { id: 1, action: 'Purchase Order PO-2024-089 approved', module: 'Purchasing', user: 'Jane Smith', timestamp: '2026-06-03 09:15', status: 'complete' },
    { id: 2, action: 'Stock adjustment for SKU-00421', module: 'Inventory', user: 'Mike Johnson', timestamp: '2026-06-03 08:47', status: 'complete' },
    { id: 3, action: 'Supplier SUPP-041 contract renewal pending', module: 'Suppliers', user: 'System', timestamp: '2026-06-03 08:00', status: 'pending' },
    { id: 4, action: 'Requisition REQ-2024-112 submitted', module: 'Purchasing', user: 'Alice Brown', timestamp: '2026-06-02 17:30', status: 'pending' },
    { id: 5, action: 'Product category Electronics updated', module: 'Inventory', user: 'John Doe', timestamp: '2026-06-02 16:15', status: 'complete' },
    { id: 6, action: 'Purchase Order PO-2024-088 rejected', module: 'Purchasing', user: 'Mike Johnson', timestamp: '2026-06-02 14:00', status: 'rejected' },
    { id: 7, action: 'New supplier SUPP-099 onboarded', module: 'Suppliers', user: 'Jane Smith', timestamp: '2026-06-02 11:30', status: 'complete' },
    { id: 8, action: 'Inventory receiving for PO-2024-080 completed', module: 'Inventory', user: 'Mike Johnson', timestamp: '2026-06-01 15:00', status: 'complete' },
  ];

  activityColumns = [
    { key: 'action', header: 'Action', width: '40%' },
    { key: 'module', header: 'Module', width: '12%' },
    { key: 'user', header: 'User', width: '15%' },
    { key: 'timestamp', header: 'Time', width: '18%' },
    { key: 'status', header: 'Status', type: 'status' as const, width: '10%' },
  ];

  quickActions = [
    { label: 'New Purchase Order', icon: 'add_shopping_cart', route: '/purchasing/orders' },
    { label: 'Stock Adjustment', icon: 'tune', route: '/inventory/adjustments' },
    { label: 'Add Supplier', icon: 'person_add', route: '/suppliers/list' },
    { label: 'Run Report', icon: 'assessment', route: '/reports' },
  ];
}
