import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PurchaseOrder, Requisition } from './models';
import { MOCK_PURCHASE_ORDERS, MOCK_REQUISITIONS } from './mock-data';

@Injectable({ providedIn: 'root' })
export class PurchasingService {
  getPurchaseOrders(): Observable<PurchaseOrder[]> { return of(MOCK_PURCHASE_ORDERS); }
  getPurchaseOrder(id: number): Observable<PurchaseOrder | undefined> {
    return of(MOCK_PURCHASE_ORDERS.find(p => p.id === id));
  }
  getRequisitions(): Observable<Requisition[]> { return of(MOCK_REQUISITIONS); }
  getPendingApprovals(): Observable<PurchaseOrder[]> {
    return of(MOCK_PURCHASE_ORDERS.filter(p => p.status === 'pending'));
  }
}
