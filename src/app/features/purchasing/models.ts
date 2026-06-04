export type POStatus = 'draft' | 'pending' | 'approved' | 'received' | 'rejected';
export type ReqStatus = 'draft' | 'pending' | 'approved' | 'rejected';

export interface PurchaseOrderLine {
  id: number; productSku: string; productName: string;
  quantity: number; unitPrice: number; total: number;
  receivedQty: number;
}
export interface PurchaseOrder {
  id: number; poNumber: string; supplierId: number; supplierName: string;
  status: POStatus; orderDate: string; expectedDate: string;
  totalAmount: number; lines: PurchaseOrderLine[]; notes: string;
}
export interface Requisition {
  id: number; reqNumber: string; requestedBy: string; department: string;
  status: ReqStatus; requestDate: string; requiredDate: string;
  description: string; estimatedCost: number;
}
