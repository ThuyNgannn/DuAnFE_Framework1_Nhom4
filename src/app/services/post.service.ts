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

  getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.urlPost);
  }

  getPostById(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlPost}/${id}`);
  }

  createPost(dataPost: any): Observable<any> {
    const formData = new FormData();
    for (const key in dataPost) {
      formData.append(key, dataPost[key]);
    }
    return this.http.post<any>(this.urlPost, formData);
  }

  updatePost(postId: string, dataPost: any): Observable<any> {
    const formData = new FormData();
    for (const key in dataPost) {
      formData.append(key, dataPost[key]);
    }
    return this.http.put<any>(`${this.urlPost}/${postId}`, formData);
  }

  deletePost(postId: string): Observable<any> {
    return this.http.delete<any>(`${this.urlPost}/${postId}`);
  }

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
