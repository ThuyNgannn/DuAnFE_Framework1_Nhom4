import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urlPost = `${environment.url}/posts`;

  constructor(private http: HttpClient) { }

  // Get all posts
  getAllPosts(): Observable<any> {
    return this.http.get<any>(this.urlPost);
  }
  

  getPostById(id: string): Observable<any> {
    return this.http.get(`${this.urlPost}/${id}`);
  }
  

  // Create a new post
  createPost(dataPost: any) {
    return this.http.post(this.urlPost, dataPost);
  }

  // Update a post by ID
  updatePost(postId: string, dataPost: any) {
    return this.http.put(`${this.urlPost}/${postId}`, dataPost);
  }

  // Delete a post by ID
  deletePost(postId: string) {
    return this.http.delete(`${this.urlPost}/${postId}`);
  }
}