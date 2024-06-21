import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css'],
})
export class AdminCategoryFormComponent implements OnInit {
  categoryForm: FormGroup;
  isEditMode: boolean = false;
  categoryId: string = '';

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.categoryId = id;
        this.isEditMode = true;
        this.categoryService.getCategoryById(id).subscribe(
          (category: any) => {
            this.categoryForm.patchValue(category);
          },
          (error) => {
            console.error('Error fetching category:', error);
          }
        );
      }
    });
  }

  submitForm() {
    if (this.categoryForm.valid) {
      const formData = this.categoryForm.value;
      if (this.isEditMode) {
        this.categoryService
          .updateCategory(this.categoryId, formData)
          .subscribe(
            () => {
              alert('Cập nhật loại thành công!');
              this.router.navigate(['/admin/category']);
            },
            (error) => {
              console.error('Lỗi cập nhật:', error);
            }
          );
      } else {
        this.categoryService.createCategory(formData).subscribe(
          () => {
            alert('Bạn đã thêm thành công!');
            this.router.navigate(['/admin/category']);
          },
          (error) => {
            console.error('Lỗi thêm mới:', error);
          }
        );
      }
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
