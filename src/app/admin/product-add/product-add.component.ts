import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      subtitle: ['', [Validators.required, Validators.minLength(10)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      author: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addForm.valid) {
      this.postService.createPost(this.addForm.value).subscribe(
        (data) => {
          console.log('Bài viết đã được thêm thành công:', data);
          this.addForm.reset();
          window.alert('Bài viết đã được thêm thành công.');
        },
        (error) => {
          console.error('Đã xảy ra lỗi khi thêm bài viết:', error);
          window.alert('Đã xảy ra lỗi khi thêm bài viết.');
        }
      );
    }
  }
}
