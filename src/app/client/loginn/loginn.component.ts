import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnDestroy {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  role: string = ''; 
  private loginSubscription: Subscription | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.loginSubscription = this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (res: any) => {
        const decoded: any = jwt_decode(res.token);
        this.role = decoded.user.role; 
        if (this.role == 'admin') {
          this.router.navigate(['/admin']); 
        } else {
          this.router.navigate(['/client']); 
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
