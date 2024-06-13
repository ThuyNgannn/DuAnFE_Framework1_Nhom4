import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  // Get all users
  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Get user by ID
  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Create a new user
  createUser(dataUser: any) {
    return this.http.post(this.apiUrl, dataUser);
  }

  // Update a user by ID
  updateUser(userId: string, dataUser: any) {
    return this.http.put(`${this.apiUrl}/${userId}`, dataUser);
  }

  // Delete a user by ID
  deleteUser(userId: string) {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }
}
