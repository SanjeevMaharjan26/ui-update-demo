import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Supplier, SupplierContact } from './models';
import { MOCK_SUPPLIERS } from './mock-data';

@Injectable({ providedIn: 'root' })
export class SuppliersService {
  getSuppliers(): Observable<Supplier[]> { return of(MOCK_SUPPLIERS); }
  getSupplier(id: number): Observable<Supplier | undefined> {
    return of(MOCK_SUPPLIERS.find(s => s.id === id));
  }
  getContacts(supplierId: number): Observable<SupplierContact[]> {
    const supplier = MOCK_SUPPLIERS.find(s => s.id === supplierId);
    return of(supplier?.contacts ?? []);
  }
}
