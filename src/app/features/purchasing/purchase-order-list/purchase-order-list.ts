import { Component, OnInit } from '@angular/core';
import { PurchaseOrder } from '../models';
import { PurchasingService } from '../purchasing.service';
import { GridColumn } from '../../../shared/components/nx-data-grid/nx-data-grid';

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
  constructor(private service: PurchasingService) {}
  ngOnInit(): void { this.service.getPurchaseOrders().subscribe(o => this.orders = o); }
}
