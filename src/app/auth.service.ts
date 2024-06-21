import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {
  private authUrl = environment.url;

  constructor(private http: HttpClient, private router: Router) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.authUrl}/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.authUrl}/login`, user).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token); // Lưu token vào localStorage khi đăng nhập thành công
        const returnUrl = this.router.routerState.snapshot.root.queryParams['returnUrl'] || '/';
        this.router.navigate([returnUrl]); // Điều hướng đến trang yêu cầu trước khi đăng nhập
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token'); // Xóa token khi đăng xuất
    this.router.navigate(['/login']); // Chuyển hướng về trang đăng nhập
  }

  get isLoggedIn(): boolean {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwt_decode(token);
      return decoded.exp > Date.now() / 1000; // Kiểm tra xem token có hợp lệ hay không
    }
    return false;
  }

  hasRole(expectedRoles: string[]): boolean {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwt_decode(token);
      return expectedRoles.includes(decoded.user.role);
    }
    return false;
  }

  getToken(): string | null {
    return localStorage.getItem('token'); // Lấy token từ localStorage
  }

  getProfile(): Observable<any> {
    return this.http.get(`${this.authUrl}/profile`);
  }

  updateAvatar(formData: FormData) {
    return this.http.put<any>(`${this.authUrl}/profile/avatar`, formData);
  }
}
