import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-client-post-detail',
  templateUrl: './client-post-detail.component.html',
  styleUrls: ['./client-post-detail.component.css']
})
export class ClientPostDetailComponent implements OnInit {
  
  postId: string = '';
  post: any;
  comments: any[] = [];
  newComment: any = { comment: '' };
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.postId = params['id'];
        this.fetchPostDetails();
        this.fetchComments();
      }
    });
  }

 fetchPostDetails(): void {
    this.postService.getPostById(this.postId)
      .subscribe(
        (post: any) => {
          this.post = post;
          if (!this.post.comments) {
            this.post.comments = [];
          }
        },
        (error) => {
          console.error('Đã có lỗi xảy ra khi lấy dữ liệu từ API:', error);
        }
      );
  }

  fetchComments(): void {
    this.postService.getComments(this.postId)
      .subscribe(
        (comments: any[]) => {
          this.comments = comments;
        },
        (error) => {
          console.error('Đã có lỗi xảy ra khi lấy bình luận từ API:', error);
        }
      );
  }

  addComment(): void {
    const token = localStorage.getItem('token'); // Giả sử token được lưu trữ trong localStorage
    if (!token) {
      console.error('Người dùng chưa đăng nhập');
      return;
    }

    this.postService.addComment(this.postId, this.newComment, token)
      .subscribe(
        (comment: any) => {
          this.comments.push(comment);
          this.newComment = { comment: '' }; // Reset form
        },
        (error) => {
          console.error('Đã có lỗi xảy ra khi thêm bình luận:', error);
        }
      );
  }
}
