import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  postId: string;
  postData: any = { title: '', subtitle: '', content: '', author: '' };
  editForm: FormGroup;
  successMessage: string;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private postService: PostService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
      this.loadPostData();
    });

    this.editForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      subtitle: ['', [Validators.required, Validators.minLength(10)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      author: ['', Validators.required]
    });
  }

  loadPostData() {
    this.postService.getPostById(this.postId).subscribe({
      next: (data) => {
        this.postData = data.post;
        this.editForm.patchValue({
          title: this.postData.title,
          subtitle: this.postData.subtitle,
          content: this.postData.content,
          author: this.postData.author
        });
      },
      error: (error) => {
        console.error('Đã xảy ra lỗi khi tải dữ liệu bài viết:', error);
        this.errorMessage = 'Đã xảy ra lỗi khi tải dữ liệu bài viết.';
      }
    });
  }

  get formControls() { return this.editForm.controls; }

  updatePost() {
    if (this.editForm.invalid) {
      return;
    }

    this.postService.updatePost(this.postId, this.editForm.value).subscribe({
      next: (data) => {
        console.log('Bài viết đã được cập nhật thành công:', data);
        window.alert('Bài viết đã được cập nhật thành công.');
      },
      error: (error) => {
        console.error('Đã xảy ra lỗi khi cập nhật bài viết:', error);
        window.alert('Đã xảy ra lỗi khi cập nhật bài viết.');
      }
    });
  }
}
