import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registerr',
  templateUrl: './registerr.component.html',
  styleUrls: ['./registerr.component.css']
})
export class RegisterrComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  studentId: string = ''
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register({ name: this.name, email: this.email, studentId: this.studentId, password: this.password }).subscribe(
      res => {
        this.router.navigate(['/login']);
      },
      err => {
        this.errorMessage = 'Registration failed';
      }
    );
  }
}
