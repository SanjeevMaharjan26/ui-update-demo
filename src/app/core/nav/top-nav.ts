import { Component, OnDestroy, OnInit, ViewChildren, QueryList } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NavItem, NavItemComponent } from './nav-item';

@Component({
  selector: 'app-top-nav',
  standalone: false,
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.scss',
})
export class TopNavComponent implements OnInit, OnDestroy {
  @ViewChildren(NavItemComponent) navItems!: QueryList<NavItemComponent>;

  openNavIndex = -1;
  navItemsData: NavItem[] = [
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

  private routerSub = Subscription.EMPTY;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSub = this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe(() => {
        this.openNavIndex = -1;
      });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  onNavItemToggled(index: number): void {
    if (this.openNavIndex !== -1 && this.openNavIndex !== index) {
      const items = this.navItems.toArray();
      const prev = items[this.openNavIndex];
      if (prev) prev.close();
    }
    this.openNavIndex = this.openNavIndex === index ? -1 : index;
  }
}
