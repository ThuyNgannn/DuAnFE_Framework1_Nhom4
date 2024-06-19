import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin-post-edit',
  templateUrl: './admin-post-edit.component.html',
  styleUrls: ['./admin-post-edit.component.css']
})
export class AdminPostEditComponent implements OnInit {
  postId: string = '';
  postForm: FormGroup;
  errorMessage: string = '';
  categories: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
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
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('id') || '';
      this.loadPost(this.postId);
      this.loadCategories();
    });
  }

  loadPost(postId: string) {
    this.postService.getPostById(postId).subscribe({
      next: (post) => {
        this.postForm.patchValue(post);
      },
      error: (err) => {
        this.errorMessage = 'Failed to load post';
      }
    });
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
      this.postService.updatePost(this.postId, this.postForm.value).subscribe({
        next: () => {
          alert('Cập nhật bài viết thành công!');
          this.router.navigate(['/admin/admin-post']);
        },
        error: (err) => {
          this.errorMessage = 'Failed to update post';
        }
      });
    } else {
      this.errorMessage = 'Vui lòng điền đầy đủ thông tin';
    }
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(cat => cat._id === categoryId);
    return category ? category.name : 'N/A';
  }
}
