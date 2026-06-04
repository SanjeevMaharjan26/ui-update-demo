export type ProductStatus = 'active' | 'inactive' | 'draft';

export interface Product {
  id: number; sku: string; name: string; category: string;
  status: ProductStatus; stockQty: number; reorderLevel: number;
  unitPrice: number; supplier: string; lastUpdated: string;
}
export interface Category {
  id: number; name: string; description: string; productCount: number;
}
export interface StockAdjustment {
  id: number; productId: number; productName: string;
  type: 'increase' | 'decrease'; quantity: number;
  reason: string; date: string; performedBy: string;
}
