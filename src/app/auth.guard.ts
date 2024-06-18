import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['expectedRole']; // Lấy vai trò cần thiết từ dữ liệu route
    console.log("Expected Role:", expectedRole);

    // Kiểm tra xem người dùng đã đăng nhập và có vai trò phù hợp hay không
    if (!this.authService.isLoggedIn || !this.authService.hasRole(expectedRole)) {
      this.router.navigate(['/login']); // Chuyển hướng đến trang đăng nhập nếu không đủ quyền
      return false;
    }
    return true;
  }
}
