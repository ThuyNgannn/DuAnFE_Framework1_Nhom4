import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  role: string = ''; // Thêm biến role để lưu trữ vai trò của người dùng
  private loginSubscription!: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    this.loginSubscription = new Subscription();
  }

  login() {
    this.loginSubscription = this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (res: any) => {
        this.role = res.role; // Lưu trữ vai trò của người dùng
        if (this.role == 'admin') {
          this.router.navigate(['/admin']); // Chuyển hướng đến trang home-admin nếu vai trò là admin
        } else {
          this.router.navigate(['/home']); // Chuyển hướng đến trang home nếu không phải là admin
        }
      },
      error: (err: any) => {
        this.errorMessage = 'Tên đăng nhập hoặc mật khẩu không đúng!!!';
      }
    });
  }

  ngOnDestroy() {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}
