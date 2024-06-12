import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient, private router: Router) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.authUrl}/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.authUrl}/login`, user);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  // Kiểm tra xem người dùng đã đăng nhập hay chưa
  isLoggedIn(): boolean {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwt_decode(token);
      return decoded.exp > Date.now() / 1000;
    }
    return false;
  }

  // Lấy token từ localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Lấy thông tin profile từ server
  getProfile(): Observable<any> {
    return this.http.get(`${this.authUrl}/profile`);
  }
}
