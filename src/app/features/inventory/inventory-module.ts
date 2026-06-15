import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { InventoryRoutingModule } from './inventory-routing-module';
import { ProductListComponent } from './product-list/product-list';
import { ProductDetailComponent } from './product-detail/product-detail';
import { CategoryListComponent } from './category-list/category-list';
import { StockAdjustmentComponent } from './stock-adjustment/stock-adjustment';
import { ProductAddDialogComponent } from './product-add-dialog/product-add-dialog';
import { CategoryAddDialogComponent } from './category-add-dialog/category-add-dialog';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    CategoryListComponent,
    StockAdjustmentComponent,
    ProductAddDialogComponent,
    CategoryAddDialogComponent,
  ],
  imports: [SharedModule, InventoryRoutingModule],
})
export class InventoryModule {}
