import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
@Component({
  selector: 'app-client-service',
  templateUrl: './client-service.component.html',
  styleUrls: ['./client-service.component.css']
})
export class ClientServiceComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.fetchAllPosts();
  }

  fetchAllPosts(): void {
    this.postService.getAllPosts()
      .subscribe(
        (posts: any[]) => {
          this.posts = posts;
        },
        (error) => {
          console.error('Đã có lỗi xảy ra khi lấy dữ liệu từ API:', error);
        }
      );
  }
}
