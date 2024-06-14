import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { CategoryService } from 'src/app/services/category.service';
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
  categories: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private postService: PostService,
    private categoryService: CategoryService
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      subtitle: [''],
      author: ['', Validators.required],
      categoryId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (data: any[]) => {
        this.categories = data;
      },
      error: (error) => {
        console.error('Lỗi:', error);
      }
    });
  }

  submitForm() {
    if (this.postForm.valid) {
      this.postService.createPost(this.postForm.value).subscribe({
        next: () => {
          alert('Thêm bài viết mới thành công!');
          this.router.navigate(['/admin/product']);
        },
        error: (err) => {
          this.errorMessage = 'Failed to add new post';
        }
      });
    } else {
      this.errorMessage = 'Vui lòng điền đầy đủ thông tin';
    }
  }
  
  
}
