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
    const url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      // Kiểm tra xem người dùng có quyền truy cập vào url không
      if (url.startsWith('/admin') && !this.authService.hasRole('admin')) {
        this.router.navigate(['/login']);
        return false;
      }
     
      return true;
    }

    // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập và lưu lại url cần truy cập
    this.authService.setRedirectUrl(url); // Lưu lại url cần truy cập
    return this.router.parseUrl('/login');
    
  }
}
