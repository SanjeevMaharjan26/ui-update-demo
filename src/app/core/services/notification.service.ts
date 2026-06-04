import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AppNotification {
  id: number;
  message: string;
  type: 'info' | 'warning' | 'error';
  timestamp: string;
  read: boolean;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notifications: AppNotification[] = [
    { id: 1, message: '5 products are below reorder level', type: 'warning', timestamp: '2026-06-03T09:00:00', read: false },
    { id: 2, message: 'Purchase Order PO-2024-089 approved', type: 'info', timestamp: '2026-06-03T08:30:00', read: false },
    { id: 3, message: 'Supplier SUPP-041 contract expiring in 7 days', type: 'warning', timestamp: '2026-06-02T16:00:00', read: false },
  ];

  notifications$ = new BehaviorSubject<AppNotification[]>(this.notifications);

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  markAllRead(): void {
    this.notifications = this.notifications.map(n => ({ ...n, read: true }));
    this.notifications$.next(this.notifications);
  }
}
