import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-client-post',
  templateUrl: './client-post.component.html',
  styleUrls: ['./client-post.component.css']
})
export class ClientPostComponent implements OnInit {
  
  posts: any[] = [];
  categories: any[] = [];

  constructor(
    private postService: PostService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.fetchAllPosts();
    this.loadCategories();
  }

  fetchAllPosts(): void {
    this.postService.getAllPosts().subscribe(
      (posts: any[]) => {
        this.posts = posts.filter(post => post.likes > 20); 
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (data: any[]) => {
        this.categories = data;
      },
      error: (error: any) => {
        console.error('Lỗi:', error);
      },
    });
  }

  getCategoryName(categoryId: any): string {
    if (typeof categoryId === 'object' && categoryId.name) {
      return categoryId.name;
    } else {
      const category = this.categories.find((cat) => cat._id === categoryId);
      return category ? category.name : 'N/A';
    }
  }

  likePost(post: any): void {
    post.likes += 1;
    this.postService.updatePost(post._id, { likes: post.likes }).subscribe(
      () => {
        // Cập nhật danh sách bài viết sau khi thích
        this.fetchAllPosts();
      },
      (error) => {
        console.error('Error updating post likes:', error);
      }
    );
  }
}
