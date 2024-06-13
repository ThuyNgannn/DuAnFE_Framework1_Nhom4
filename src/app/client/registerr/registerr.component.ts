import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-registerr',
  templateUrl: './registerr.component.html',
  styleUrls: ['./registerr.component.css']
})
export class RegisterrComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const observer = {
      next: (res: any) => {
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        this.errorMessage = 'Registration failed';
      }
    };

    this.authService.register({ name: this.name, email: this.email, password: this.password }).subscribe(observer);
  }

}
