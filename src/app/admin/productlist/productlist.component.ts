import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service'; // Thay đường dẫn bằng đường dẫn đúng

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getAllPosts().subscribe({
      next: (data: { message: string, posts: any[] }) => {
        console.log(data); // In dữ liệu ra console để kiểm tra
        if (Array.isArray(data.posts)) {
          this.posts = data.posts;
        } else {
          // Xử lý trường hợp khi không có posts
          console.error("Không có dữ liệu bài viết trả về từ API");
        }
      },
      error: (error) => {
        // Xử lý khi có lỗi xảy ra
        console.error("Đã xảy ra lỗi:", error);
      }
    });
  }

  deletePost(postId: string) {
    if (confirm('Bạn có chắc chắn muốn xóa bài viết này không?')) {
      this.postService.deletePost(postId).subscribe({
        next: () => {
          this.loadPosts();
          alert('Bài viết đã được xóa thành công!');
        },
        error: (error) => {
          alert('Đã xảy ra lỗi khi xóa bài viết!');
        }
      });
    }
  }
}
