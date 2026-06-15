import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryLayoutComponent } from './inventory-layout/inventory-layout';
import { ProductListComponent } from './product-list/product-list';
import { ProductDetailComponent } from './product-detail/product-detail';
import { CategoryListComponent } from './category-list/category-list';
import { StockAdjustmentComponent } from './stock-adjustment/stock-adjustment';

const routes: Routes = [
  {
    path: '',
    component: InventoryLayoutComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'stock', component: ProductListComponent },
      { path: 'categories', component: CategoryListComponent },
      { path: 'adjustments', component: StockAdjustmentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
