import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, catchError } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:3000/api';
  private redirectUrl: string = '';
  constructor(private http: HttpClient, private router: Router) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.authUrl}/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.authUrl}/login`, user)
        .pipe(
            tap((res: any) => {
                sessionStorage.setItem('token', res.token);
            }),
            catchError(error => {
              console.error('Login error:', error);
              throw error;
            })
        );
  }

  logout(): void {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
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
  this.redirectUrl = ''; // Reset redirectUrl
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
    const token = this.getToken();
    if (token) {
      const decoded: any = jwt_decode(token);
      const userRoles = decoded.user.role ? [decoded.user.role] : []; 
      return userRoles.includes(role);
    }
    return false;
  }
   // Lấy thông tin profile từ server
   getProfile(): Observable<any> {
    return this.http.get(`${this.authUrl}/profile`);
  }
}
