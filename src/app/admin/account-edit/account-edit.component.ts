import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css'],
})
export class AccountEditComponent implements OnInit {
  userId: string = '';
  userForm: FormGroup;
  errorMessage: string = '';
  selectedFile: File | null = null;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
      studentId: [''],
      avatar: [null],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id') || '';
      this.loadUser(this.userId);
    });
  }

  loadUser(userId: string) {
    this.userService.getUserById(userId).subscribe({
      next: (user) => {
        this.userForm.patchValue(user);
      },
      error: (err) => {
        this.errorMessage = 'Failed to load user';
      },
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  submitForm() {
    if (this.userForm.valid) {
      const formData = new FormData();
      formData.append('email', this.userForm.get('email')!.value);
      formData.append('name', this.userForm.get('name')!.value);
      formData.append('password', this.userForm.get('password')!.value);
      formData.append('studentId', this.userForm.get('studentId')!.value);
      if (this.selectedFile) {
        formData.append('avatar', this.selectedFile, this.selectedFile.name);
      }

      this.userService.updateUser(this.userId, formData).subscribe({
        next: () => {
          alert('Cập nhật người dùng thành công!');
          this.router.navigate(['/admin/account']);
        },
        error: (err) => {
          this.errorMessage = 'Lỗi cập nhật';
        },
      });
    } else {
      this.errorMessage = 'Vui lòng điền đầy đủ thông tin';
    }
  }
}
