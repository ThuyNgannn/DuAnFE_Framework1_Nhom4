import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/post.service';
@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.css']
})
export class AdminProductEditComponent implements OnInit {
  postId: string = '';
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService, private router: Router, private route: ActivatedRoute) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      subtitle: [''],
      author: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
      this.loadPost(this.postId);
    });
  }

  loadPost(id: string) {
    this.postService.getPostById(id).subscribe({
      next: (post: any) => {
        this.postForm.patchValue(post); // Đổ dữ liệu bài viết lên form
      },
      error: (error) => {
        console.error('Lỗi:', error);
      }
    });
  }

  submitForm() {
    if (this.postForm.valid) {
      this.postService.updatePost(this.postId, this.postForm.value).subscribe({
        next: () => {
          alert('Cập nhật bài viết thành công!');
          this.router.navigate(['/admin/product']);
        },
        error: (error) => {
          alert('Đã xảy ra lỗi khi cập nhật bài viết!');
          console.error('Lỗi:', error);
        }
      });
    } else {
      alert('Vui lòng điền đầy đủ thông tin!');
    }
  }
}
