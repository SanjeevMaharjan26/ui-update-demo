import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PurchaseOrder } from '../models';
import { PurchasingService } from '../purchasing.service';

@Component({ selector: 'app-receiving', standalone: false, templateUrl: './receiving.html', styleUrl: './receiving.scss' })
export class ReceivingComponent implements OnInit {
  approvedOrders: PurchaseOrder[] = [];
  selectedOrder: PurchaseOrder | undefined;
  form!: FormGroup;

  constructor(private service: PurchasingService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.service.getPurchaseOrders().subscribe(orders => {
      this.approvedOrders = orders.filter(o => o.status === 'approved');
    });
    this.form = this.fb.group({
      poId: ['', Validators.required],
      receivedDate: [new Date().toISOString().split('T')[0], Validators.required],
      notes: [''],
    });
  }
  selectOrder(id: string): void {
    this.selectedOrder = this.approvedOrders.find(o => o.id === Number(id));
  }
  submit(): void { /* mock receiving */ }
}
