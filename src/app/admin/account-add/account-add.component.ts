import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css'],
})
export class AccountAddComponent implements OnInit {
  userForm: FormGroup;
  errorMessage: string = '';
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', Validators.required],
      studentId: ['', Validators.required],
      avatar: [null],
    });
  }

  ngOnInit(): void {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  submitForm() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      if (this.selectedFile) {
        formData.avatar = this.selectedFile;
      }
      this.userService.createUser(formData).subscribe({
        next: () => {
          alert('Thêm người dùng mới thành công!');
          this.router.navigate(['admin/account']);
        },
        error: (err) => {
          this.errorMessage = 'Failed to add new user';
        },
      });
    } else {
      this.errorMessage = 'Vui lòng điền đầy đủ thông tin';
    }
  }
}
