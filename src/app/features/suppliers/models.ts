export type SupplierStatus = 'active' | 'inactive' | 'pending';

export interface SupplierContact {
  id: number; supplierId: number; name: string; role: string;
  email: string; phone: string; primary: boolean;
}
export interface Supplier {
  id: number; code: string; name: string; country: string; city: string;
  status: SupplierStatus; rating: number; category: string;
  email: string; phone: string; website: string;
  taxId: string; paymentTerms: string; currency: string;
  contacts: SupplierContact[]; onboardedDate: string;
}
