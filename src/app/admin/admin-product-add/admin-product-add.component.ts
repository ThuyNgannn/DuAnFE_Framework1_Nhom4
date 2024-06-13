import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.css']
})
export class AdminProductAddComponent implements OnInit {
  postForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private postService: PostService, private router: Router) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      content: ['', [Validators.required, Validators.minLength(50)]],
      author: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  submitForm() {
    if (this.postForm.valid) {
      this.postService.createPost(this.postForm.value).subscribe({
        next: () => {
          this.router.navigate(['/admin/product']);
        },
        error: (err) => {
          this.errorMessage = 'Failed to create post';
        }
      });
    } else {
      // Check each field for errors
      switch (true) {
        case this.postForm.get('title')?.hasError('required'):
          this.errorMessage = 'Tiêu đề là bắt buộc.';
          break;
        case this.postForm.get('subtitle')?.hasError('required'):
          this.errorMessage = 'Tiêu đề phụ là bắt buộc.';
          break;
        case this.postForm.get('content')?.hasError('required'):
          this.errorMessage = 'Nội dung là bắt buộc.';
          break;
        case this.postForm.get('content')?.hasError('minlength'):
          this.errorMessage = 'Nội dung phải có ít nhất 50 ký tự.';
          break;
        case this.postForm.get('author')?.hasError('required'):
          this.errorMessage = 'Tác giả là bắt buộc.';
          break;
        default:
          this.errorMessage = 'Vui lòng điền đầy đủ thông tin.';
          break;
      }
    }
  }
  
  
}
