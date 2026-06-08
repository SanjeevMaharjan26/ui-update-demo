import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Supplier, SupplierContact } from './models';
import { MOCK_SUPPLIERS } from './mock-data';

@Injectable({ providedIn: 'root' })
export class SuppliersService {
  private suppliers = [...MOCK_SUPPLIERS];

  getSuppliers(): Observable<Supplier[]> { return of(this.suppliers); }
  getSupplier(id: number): Observable<Supplier | undefined> {
    return of(this.suppliers.find(s => s.id === id));
  }
  getContacts(supplierId: number): Observable<SupplierContact[]> {
    const supplier = this.suppliers.find(s => s.id === supplierId);
    return of(supplier?.contacts ?? []);
  }

  addSupplier(data: Partial<Supplier>): Observable<Supplier> {
    const nextId = Math.max(...this.suppliers.map(s => s.id), 0) + 1;
    const supplier: Supplier = {
      id: nextId,
      code: `SUPP-${String(nextId).padStart(3, '0')}`,
      name: '',
      country: '',
      city: '',
      status: 'active',
      rating: 0,
      category: '',
      email: '',
      phone: '',
      website: '',
      taxId: '',
      paymentTerms: 'Net 30',
      currency: 'USD',
      contacts: [],
      onboardedDate: new Date().toISOString().split('T')[0],
      ...data,
    };
    this.suppliers.push(supplier);
    return of(supplier);
  }
}
