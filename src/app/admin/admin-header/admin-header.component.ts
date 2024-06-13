import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
  userDetails: any;
  constructor(private router: Router) {}

  navigateToProfile(id: string): void {
    this.router.navigate(['/admin/profile', id]); // Chuyển hướng đến profile với tham số id
  }

}
