import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PurchaseOrder } from '../models';
import { PurchasingService } from '../purchasing.service';
import { TableColumn } from '../../../shared/components/data-display/nx-grid/nx-grid';

@Component({ selector: 'app-purchase-order-detail', standalone: false, templateUrl: './purchase-order-detail.html', styleUrl: './purchase-order-detail.scss' })
export class PurchaseOrderDetailComponent implements OnInit {
  order: PurchaseOrder | undefined;
  form!: FormGroup;
  lineColumns: TableColumn[] = [
    { key: 'productSku', header: 'SKU', width: '110px' },
    { key: 'productName', header: 'Product' },
    { key: 'quantity', header: 'Qty', width: '70px' },
    { key: 'unitPrice', header: 'Unit Price', type: 'currency', width: '110px' },
    { key: 'total', header: 'Total', type: 'currency', width: '110px' },
    { key: 'receivedQty', header: 'Received', width: '90px' },
  ];
  constructor(private route: ActivatedRoute, private service: PurchasingService, private fb: FormBuilder) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getPurchaseOrder(id).subscribe(o => {
      this.order = o;
      this.form = this.fb.group({
        supplierName: [o?.supplierName, Validators.required],
        orderDate:    [o?.orderDate],
        expectedDate: [o?.expectedDate],
        notes:        [o?.notes],
      });
    });
  }
  approve(): void { if (this.order) this.order.status = 'approved'; }
  reject(): void  { if (this.order) this.order.status = 'rejected'; }
}
