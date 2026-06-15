import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, Category, StockAdjustment } from './models';
import { MOCK_PRODUCTS, MOCK_CATEGORIES, MOCK_ADJUSTMENTS } from './mock-data';

@Injectable({ providedIn: 'root' })
export class InventoryService {
  private products = [...MOCK_PRODUCTS];
  private categories = [...MOCK_CATEGORIES];
  private nextCategoryId = this.categories.length + 1;

  getProducts(): Observable<Product[]> { return of(this.products); }
  getProduct(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }
  getCategories(): Observable<Category[]> { return of(this.categories); }
  getAdjustments(): Observable<StockAdjustment[]> { return of(MOCK_ADJUSTMENTS); }
  getLowStockProducts(): Observable<Product[]> {
    return of(this.products.filter(p => p.stockQty <= p.reorderLevel));
  }

  addCategory(data: Partial<Category>): Observable<Category> {
    const category: Category = {
      id: this.nextCategoryId++,
      name: data.name || '',
      description: data.description || '',
      productCount: 0,
    };
    this.categories.push(category);
    return of(category);
  }
}
