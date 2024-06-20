import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-postlist',
  templateUrl: './admin-postlist.component.html',
  styleUrls: ['./admin-postlist.component.css']
})
export class AdminPostlistComponent implements OnInit {
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
        console.log('Posts:', data); 
        this.posts = data;
        this.logImages();
      },
      error: (error: any) => {
        console.error('Lỗi:', error);
      },
    });
  }

  logImages() {
    this.posts.forEach(post => {
      console.log(post.image);
    });
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (data: any[]) => {
        console.log('Categories:', data);
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
          this.loadPosts();
        },
        error: (error: any) => {
          alert('Đã xảy ra lỗi khi xóa bài viết!');
          console.error('Lỗi:', error);
        },
      });
    }
  }
}
