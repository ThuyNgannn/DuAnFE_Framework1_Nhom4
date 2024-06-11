import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/post.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

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
