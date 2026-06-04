import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseOrderListComponent } from './purchase-order-list/purchase-order-list';
import { PurchaseOrderDetailComponent } from './purchase-order-detail/purchase-order-detail';
import { RequisitionListComponent } from './requisition-list/requisition-list';
import { ReceivingComponent } from './receiving/receiving';

const routes: Routes = [
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  { path: 'orders', component: PurchaseOrderListComponent },
  { path: 'orders/:id', component: PurchaseOrderDetailComponent },
  { path: 'requisitions', component: RequisitionListComponent },
  { path: 'approvals', component: RequisitionListComponent },
  { path: 'receiving', component: ReceivingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchasingRoutingModule {}
