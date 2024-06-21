import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {
  posts: any[] = [];
  categories: any[] = [];
  searchKeyword: string = '';

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchKeyword = params['q'] || '';
      if (this.searchKeyword.trim() !== '') {
        this.searchPosts();
      }
    });
    this.loadCategories();
  }

  searchPosts(): void {
    this.postService.searchPosts(this.searchKeyword).subscribe(
      (posts: any[]) => {
        this.posts = posts;
      },
      (error) => {
        console.error('Error searching posts:', error);
      }
    );
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (data: any[]) => {
        console.log('Categories:', data);
        this.categories = data;
      },
      error: (error: any) => {
        console.error('Lỗi:', error);
      },
    });
  }

  getCategoryName(categoryId: any): string {
    if (typeof categoryId === 'object' && categoryId.name) {
      return categoryId.name;
    } else {
      const category = this.categories.find((cat) => cat._id === categoryId);
      return category ? category.name : 'N/A';
    }
  }
}
