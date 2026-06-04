import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsDashboardComponent } from './reports-dashboard/reports-dashboard';
import { InventoryReportComponent } from './inventory-report/inventory-report';
import { PurchaseReportComponent } from './purchase-report/purchase-report';
import { CustomReportComponent } from './custom-report/custom-report';

const routes: Routes = [
  { path: '', component: ReportsDashboardComponent },
  { path: 'inventory', component: InventoryReportComponent },
  { path: 'purchasing', component: PurchaseReportComponent },
  { path: 'suppliers', component: PurchaseReportComponent },
  { path: 'custom', component: CustomReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
