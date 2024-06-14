import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, catchError, throwError, BehaviorSubject } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'http://localhost:3000/api';
  private redirectUrl: string = '';

  private roleSubject = new BehaviorSubject<string | null>(null);
  roleChanged = this.roleSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.setInitialRole();
  }

  private setInitialRole() {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwt_decode(token);
      this.roleSubject.next(decoded.user.role);
    } else {
      this.roleSubject.next(null);
    }
  }

  register(user: any): Observable<any> {
    if (!user.trangthai) {
      user.trangthai = 'đang hoạt động';
    }
    return this.http.post(`${this.authUrl}/register`, user).pipe(
      tap((res: any) => {
        sessionStorage.setItem('token', res.token);
        const decoded: any = jwt_decode(res.token);
        this.roleSubject.next(decoded.user.role);
      }),
      catchError((error) => {
        console.error('Registration error:', error);
        throw error;
      })
    );
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.authUrl}/login`, user).pipe(
      tap((res: any) => {
        sessionStorage.setItem('token', res.token);
        const decoded: any = jwt_decode(res.token);
        this.roleSubject.next(decoded.user.role);
      }),
      catchError((error) => {
        console.error('Login error:', error);
        throw error;
      })
    );
  }
  

  logout(): void {
    sessionStorage.removeItem('token');
    this.roleSubject.next(null);
    this.router.navigate(['/client/login']);
  }
  

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwt_decode(token);
      return decoded.exp > Date.now() / 1000;
    }
    return false;
  }
  

  // Lưu redirectUrl
  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

  getRedirectUrl(): string {
    const url = this.redirectUrl;
    this.redirectUrl = '';
    return url;
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  getRole(): string | null {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwt_decode(token);
      return decoded.user.role;
    }
    return null;
  }

  hasRole(role: string): boolean {
    const userRole = this.getRole();
    return userRole === role;
  }

  // Lấy thông tin profile từ server
  getProfile(): Observable<any> {
    return this.http.get(`${this.authUrl}/profile`);
  }
}
