import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { PurchasingRoutingModule } from './purchasing-routing-module';
import { PurchaseOrderListComponent } from './purchase-order-list/purchase-order-list';
import { PurchaseOrderDetailComponent } from './purchase-order-detail/purchase-order-detail';
import { RequisitionListComponent } from './requisition-list/requisition-list';
import { ReceivingComponent } from './receiving/receiving';
import { PurchaseOrderAddDialogComponent } from './purchase-order-add-dialog/purchase-order-add-dialog';
import { RequisitionAddDialogComponent } from './requisition-add-dialog/requisition-add-dialog';

@NgModule({
  declarations: [
    PurchaseOrderListComponent,
    PurchaseOrderDetailComponent,
    RequisitionListComponent,
    ReceivingComponent,
    PurchaseOrderAddDialogComponent,
    RequisitionAddDialogComponent,
  ],
  imports: [SharedModule, PurchasingRoutingModule],
})
export class PurchasingModule {}
