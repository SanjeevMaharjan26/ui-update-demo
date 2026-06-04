import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { ReportsRoutingModule } from './reports-routing-module';
import { ReportsDashboardComponent } from './reports-dashboard/reports-dashboard';
import { InventoryReportComponent } from './inventory-report/inventory-report';
import { PurchaseReportComponent } from './purchase-report/purchase-report';
import { CustomReportComponent } from './custom-report/custom-report';

@NgModule({
  declarations: [ReportsDashboardComponent, InventoryReportComponent, PurchaseReportComponent, CustomReportComponent],
  imports: [SharedModule, ReportsRoutingModule],
})
export class ReportsModule {}
