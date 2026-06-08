import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseOrder } from '../models';
import { PurchasingService } from '../purchasing.service';
import { PurchaseOrderAddDialogComponent } from '../purchase-order-add-dialog/purchase-order-add-dialog';
import { GridColumn } from '../../../shared/components/data-display/nx-grid/nx-grid';

@Component({ selector: 'app-purchase-order-list', standalone: false, templateUrl: './purchase-order-list.html', styleUrl: './purchase-order-list.scss' })
export class PurchaseOrderListComponent implements OnInit {
  orders: PurchaseOrder[] = [];
  columns: GridColumn[] = [
    { key: 'poNumber', header: 'PO Number', sortable: true, width: '140px' },
    { key: 'supplierName', header: 'Supplier', sortable: true },
    { key: 'status', header: 'Status', type: 'status', sortable: true, width: '110px' },
    { key: 'orderDate', header: 'Order Date', sortable: true, width: '110px' },
    { key: 'expectedDate', header: 'Expected', sortable: true, width: '110px' },
    { key: 'totalAmount', header: 'Total', type: 'currency', sortable: true, width: '120px' },
  ];
  constructor(
    private service: PurchasingService,
    private dialog: MatDialog,
  ) {}
  ngOnInit(): void { this.service.getPurchaseOrders().subscribe(o => this.orders = o); }

  openAddDialog(): void {
    const ref = this.dialog.open(PurchaseOrderAddDialogComponent, { width: '600px' });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.service.addPurchaseOrder(result).subscribe(() => {
          this.service.getPurchaseOrders().subscribe(o => this.orders = o);
        });
      }
    });
  }
}
