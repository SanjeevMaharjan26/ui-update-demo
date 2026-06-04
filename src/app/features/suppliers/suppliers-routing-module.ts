import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierListComponent } from './supplier-list/supplier-list';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: SupplierListComponent },
  { path: 'list/:id', component: SupplierDetailComponent },
  { path: 'contacts', component: SupplierListComponent },
  { path: 'performance', component: SupplierListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuppliersRoutingModule {}
