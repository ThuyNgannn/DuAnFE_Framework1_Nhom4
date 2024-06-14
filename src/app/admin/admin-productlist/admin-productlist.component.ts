import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-productlist',
  templateUrl: './admin-productlist.component.html',
  styleUrls: ['./admin-productlist.component.css'],
})
export class AdminProductlistComponent implements OnInit {
  posts: any[] = [];
  categories: any[] = [];

  constructor(
    private postService: PostService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getAllPosts().subscribe({
      next: (data: any[]) => {
        console.log('Posts:', data); // Log dữ liệu bài viết để kiểm tra
        this.posts = data;
      },
      error: (error: any) => {
        console.error('Lỗi:', error);
      },
    });
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

  deletePost(postId: string) {
    if (confirm('Bạn có chắc chắn muốn xóa bài viết này không?')) {
      this.postService.deletePost(postId).subscribe({
        next: () => {
          alert('Xóa bài viết thành công!');
          this.loadPosts(); // Load lại danh sách sau khi xóa thành công
        },
        error: (error: any) => {
          alert('Đã xảy ra lỗi khi xóa bài viết!');
          console.error('Lỗi:', error);
        },
      });
    }
  }
}
