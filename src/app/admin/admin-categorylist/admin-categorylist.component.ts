import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-admin-categorylist',
  templateUrl: './admin-categorylist.component.html',
  styleUrls: ['./admin-categorylist.component.css']
})
export class AdminCategorylistComponent implements OnInit  {
  categories: any[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe(
      (data: any[]) => {
        this.categories = data;
      },
      (error) => {
        console.error('Lỗi:', error);
      }
    );
  }

  deleteCategory(id: string) {
    if (confirm('Bạn có chắc chắn muốn xóa loại này không?')) {
      this.categoryService.deleteCategory(id).subscribe(
        () => {
          alert('Xóa loại thành công!');
          this.loadCategories();
        },
        (error) => {
          console.error('Lỗi:', error);
        }
      );
    }
  }
}
