import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'viewer';
  initials: string;
}

@Injectable({ providedIn: 'root' })
export class AuthStubService {
  private readonly mockUser: AuthUser = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@nexuserp.com',
    role: 'admin',
    initials: 'JD',
  };

  currentUser$ = new BehaviorSubject<AuthUser>(this.mockUser);
  isAuthenticated$ = new BehaviorSubject<boolean>(true);

  get currentUser(): AuthUser {
    return this.currentUser$.getValue();
  }

  hasRole(role: string): boolean {
    return this.mockUser.role === role || this.mockUser.role === 'admin';
  }
}
