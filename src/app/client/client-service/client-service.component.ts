import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-client-service',
  templateUrl: './client-service.component.html',
  styleUrls: ['./client-service.component.css'],
})
export class ClientServiceComponent implements OnInit {
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
    //ghi chú
    this.postService.getAllPosts().subscribe(
      (posts: any[]) => {
        this.posts = posts;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (data: any[]) => {
        console.log('Categories:', data); // Log dữ liệu danh mục để kiểm tra
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
}
