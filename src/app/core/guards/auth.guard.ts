import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthStubService } from '../services/auth-stub.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthStubService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isAuthenticated$.getValue()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
