import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-admin-productlist',
  templateUrl: './admin-productlist.component.html',
  styleUrls: ['./admin-productlist.component.css']
}) 
export class AdminProductlistComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getAllPosts().subscribe({
      next: (data: any[]) => {
        this.posts = data;
      },
      error: (error) => {
        console.error('Lỗi:', error);
      }
    });
  }

  deletePost(postId: string) {
    if (confirm('Bạn có chắc chắn muốn xóa bài viết này không?')) {
      this.postService.deletePost(postId).subscribe({
        next: () => {
          alert('Xóa bài viết thành công!');
          this.loadPosts(); // Load lại danh sách sau khi xóa thành công
        },
        error: (error) => {
          alert('Đã xảy ra lỗi khi xóa bài viết!');
          console.error('Lỗi:', error);
        }
      });
    }
  }
}
