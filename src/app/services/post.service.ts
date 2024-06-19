import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private urlPost = `${environment.url}/posts`;

  constructor(private http: HttpClient) {}

  // Get all posts
  getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.urlPost);
  }

  getPostById(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlPost}/${id}`);
  }

  // Create a new post
  createPost(dataPost: any): Observable<any> {
    return this.http.post<any>(this.urlPost, dataPost);
  }

  // Update a post by ID
  updatePost(postId: string, dataPost: any): Observable<any> {
    return this.http.put<any>(`${this.urlPost}/${postId}`, dataPost);
  }

  // Delete a post by ID
  deletePost(postId: string): Observable<any> {
    return this.http.delete<any>(`${this.urlPost}/${postId}`);
  }
  // New methods for comments
  addComment(postId: string, comment: any, token: string): Observable<any> {
    const headers = new HttpHeaders().set('x-auth-token', token);
    return this.http.post<any>(`${this.urlPost}/${postId}/comments`, comment, {
      headers,
    });
  }

  getComments(postId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlPost}/${postId}/comments`);
  }
}
