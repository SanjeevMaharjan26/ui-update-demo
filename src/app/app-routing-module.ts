import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard-module').then(m => m.DashboardModule),
  },
  {
    path: 'inventory',
    loadChildren: () =>
      import('./features/inventory/inventory-module').then(m => m.InventoryModule),
  },
  {
    path: 'purchasing',
    loadChildren: () =>
      import('./features/purchasing/purchasing-module').then(m => m.PurchasingModule),
  },
  {
    path: 'suppliers',
    loadChildren: () =>
      import('./features/suppliers/suppliers-module').then(m => m.SuppliersModule),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./features/reports/reports-module').then(m => m.ReportsModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./features/settings/settings-module').then(m => m.SettingsModule),
  },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
