import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PurchaseOrder, PurchaseOrderLine, Requisition } from './models';
import { MOCK_PURCHASE_ORDERS, MOCK_REQUISITIONS } from './mock-data';

@Injectable({ providedIn: 'root' })
export class PurchasingService {
  private orders = [...MOCK_PURCHASE_ORDERS];
  private requisitions = [...MOCK_REQUISITIONS];

  getPurchaseOrders(): Observable<PurchaseOrder[]> { return of(this.orders); }
  getPurchaseOrder(id: number): Observable<PurchaseOrder | undefined> {
    return of(this.orders.find(p => p.id === id));
  }
  getRequisitions(): Observable<Requisition[]> { return of(this.requisitions); }
  getPendingApprovals(): Observable<PurchaseOrder[]> {
    return of(this.orders.filter(p => p.status === 'pending'));
  }

  addPurchaseOrder(data: Partial<PurchaseOrder>): Observable<PurchaseOrder> {
    const nextId = Math.max(...this.orders.map(o => o.id), 0) + 1;
    const po: PurchaseOrder = {
      id: nextId,
      poNumber: `PO-${new Date().getFullYear()}-${String(nextId).padStart(3, '0')}`,
      supplierId: 0,
      supplierName: '',
      status: 'draft',
      orderDate: new Date().toISOString().split('T')[0],
      expectedDate: '',
      totalAmount: 0,
      lines: [] as PurchaseOrderLine[],
      notes: '',
      ...data,
    };
    this.orders.push(po);
    return of(po);
  }

  addRequisition(data: Partial<Requisition>): Observable<Requisition> {
    const nextId = Math.max(...this.requisitions.map(r => r.id), 0) + 1;
    const req: Requisition = {
      id: nextId,
      reqNumber: `REQ-${new Date().getFullYear()}-${String(nextId).padStart(3, '0')}`,
      requestedBy: '',
      department: '',
      status: 'draft',
      requestDate: new Date().toISOString().split('T')[0],
      requiredDate: '',
      description: '',
      estimatedCost: 0,
      ...data,
    };
    this.requisitions.push(req);
    return of(req);
  }
}
