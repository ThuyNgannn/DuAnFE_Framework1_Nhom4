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

  hasRole(expectedRole: string): boolean {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwt_decode(token);
      return decoded.user.role === expectedRole; // Kiểm tra vai trò của người dùng từ token
    }
    return false;
  }

  getToken(): string | null {
    return localStorage.getItem('token'); // Lấy token từ localStorage
  }

  getProfile(): Observable<any> {
    return this.http.get(`${this.authUrl}/profile`);
  }


}
