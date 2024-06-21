import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlUser = `${environment.url}/users`;

  constructor(private http: HttpClient) {}

  // Get all users
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.urlUser);
  }
  

  // Get user by ID
  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlUser}/${id}`);
  }

  // Create a new user
  createUser(userData: any): Observable<any> {
    const formData = new FormData();
    for (const key in userData) {
      formData.append(key, userData[key]);
    }
    return this.http.post<any>(this.urlUser, formData);
  }

  // Update a user by ID
  updateUser(userId: string, userData: FormData) {
    return this.http.put(`${this.urlUser}/${userId}`, userData);
  }
  

  // Delete a user by ID
  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(`${this.urlUser}/${userId}`);
  }

  // New methods for user authentication
  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.urlUser}/login`, credentials);
  }

  register(dataUser: any): Observable<any> {
    return this.http.post<any>(`${this.urlUser}/register`, dataUser);
  }

  // Example method for checking if user is authenticated
  isAuthenticated(token: string): Observable<any> {
    const headers = new HttpHeaders().set('x-auth-token', token);
    return this.http.get<any>(`${this.urlUser}/isAuthenticated`, { headers });
  }

  // Bật hoặc tắt trạng thái của người dùng
  toggleUserStatus(userId: string): Observable<any> {
    return this.http.put<any>(`${this.urlUser}/${userId}/toggle-status`, {});
  }

}
