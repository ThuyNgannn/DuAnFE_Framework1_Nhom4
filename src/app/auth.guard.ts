import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Kiểm tra nếu người dùng đã đăng nhập
    if (this.authService.isLoggedIn()) {
      return true; // Cho phép truy cập
    } else {
      this.router.navigate(['/login']); // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
      return false;
    }
  }
}
