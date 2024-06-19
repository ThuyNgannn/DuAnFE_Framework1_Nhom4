import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  constructor(private authService: AuthService, private router: Router) {}
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
