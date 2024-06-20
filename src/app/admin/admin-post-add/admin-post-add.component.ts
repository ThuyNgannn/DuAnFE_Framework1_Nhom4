import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-post-add',
  templateUrl: './admin-post-add.component.html',
  styleUrls: ['./admin-post-add.component.css']
})
export class AdminPostAddComponent implements OnInit {
  postForm: FormGroup;
  errorMessage: string = '';
  categories: any[] = [];
  selectedFile: File | null = null;

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
      categoryId: ['', Validators.required],
      image: [null]
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

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  submitForm() {
    if (this.postForm.valid) {
      const formData = this.postForm.value;
      if (this.selectedFile) {
        formData.image =

this.selectedFile;
}
this.postService.createPost(formData).subscribe({
next: () => {
alert('Thêm bài viết mới thành công!');
this.router.navigate(['admin/admin-post']);
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

