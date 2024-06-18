import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(public authService: AuthService, private router: Router) {}

  login() {
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      res => {
        // Sau khi đăng nhập thành công, kiểm tra vai trò và chuyển hướng tới trang phù hợp
        if (this.authService.hasRole('admin')) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/home']);
          this.errorMessage = ''; // Đảm bảo xóa thông báo lỗi nếu có
        }
      },
      err => {
        this.errorMessage = 'Invalid credentials';
      }
    );
  }
}
