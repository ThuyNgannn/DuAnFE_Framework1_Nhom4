import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-client-service-detail',
  templateUrl: './client-service-detail.component.html',
  styleUrls: ['./client-service-detail.component.css']
})
export class ClientServiceDetailComponent implements OnInit {
  postId: string = '';
  post: any;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.postId = params['id'];
        this.fetchPostDetails();
      }
    });
  }

  fetchPostDetails(): void {
    this.postService.getPostById(this.postId)
      .subscribe(
        (post: any) => {
          this.post = post;
        },
        (error) => {
          console.error('Đã có lỗi xảy ra khi lấy dữ liệu từ API:', error);
        }
      );
  }
}
