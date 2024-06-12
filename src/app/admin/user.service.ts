import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlUser = `${environment.url}/users`;

  constructor(private http: HttpClient) { }

  // Get all users
  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.urlUser);
  }

  // Get user by ID
  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.urlUser}/${id}`);
  }

  // Create a new user
  createUser(dataUser: any) {
    return this.http.post(this.urlUser, dataUser);
  }

  // Update a user by ID
  updateUser(userId: string, dataUser: any) {
    return this.http.put(`${this.urlUser}/${userId}`, dataUser);
  }

  // Delete a user by ID
  deleteUser(userId: string) {
    return this.http.delete(`${this.urlUser}/${userId}`);
  }
}
