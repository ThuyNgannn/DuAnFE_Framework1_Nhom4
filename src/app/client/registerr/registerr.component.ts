import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-registerr',
  templateUrl: './registerr.component.html',
  styleUrls: ['./registerr.component.css'],
})
export class RegisterrComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  studentId: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const observer = {
      next: (res: any) => {
        this.successMessage = 'Đăng ký thành công!'; // Set success message on successful registration
        this.router.navigate(['/client/login']);
      },
      error: (err: any) => {
        this.errorMessage = 'Đăng ký thất bại. Vui lòng thử lại.';
      },
    };

    this.authService
      .register({ name: this.name, email: this.email, password: this.password, studentId: this.studentId })
      .subscribe(observer);
  }
}
