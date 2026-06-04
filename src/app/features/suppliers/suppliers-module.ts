import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { SuppliersRoutingModule } from './suppliers-routing-module';
import { SupplierListComponent } from './supplier-list/supplier-list';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail';
import { SupplierContactsComponent } from './supplier-contacts/supplier-contacts';

@NgModule({
  declarations: [SupplierListComponent, SupplierDetailComponent, SupplierContactsComponent],
  imports: [SharedModule, SuppliersRoutingModule],
})
export class SuppliersModule {}
