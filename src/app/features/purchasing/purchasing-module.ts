import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { PurchasingRoutingModule } from './purchasing-routing-module';
import { PurchaseOrderListComponent } from './purchase-order-list/purchase-order-list';
import { PurchaseOrderDetailComponent } from './purchase-order-detail/purchase-order-detail';
import { RequisitionListComponent } from './requisition-list/requisition-list';
import { ReceivingComponent } from './receiving/receiving';

@NgModule({
  declarations: [
    PurchaseOrderListComponent,
    PurchaseOrderDetailComponent,
    RequisitionListComponent,
    ReceivingComponent,
  ],
  imports: [SharedModule, PurchasingRoutingModule],
})
export class PurchasingModule {}
