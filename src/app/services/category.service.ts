import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = `${environment.url}/categories`;

  constructor(private http: HttpClient) {}

  // Get all categories
  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get category by ID
  getCategoryById(categoryId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${categoryId}`);
  }

  // Create a new category
  createCategory(category: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, category);
  }

  // Update a category by ID
  updateCategory(categoryId: string, category: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${categoryId}`, category);
  }

  // Delete a category by ID
  deleteCategory(categoryId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${categoryId}`);
  }
}
