import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client-blog',
  templateUrl: './client-blog.component.html',
  template: `
    <h2>Blog Component</h2>
    <button (click)="navigateToAbout()">Go to About</button>
  `,
  styleUrls: ['./client-blog.component.css']
})
export class ClientBlogComponent {
  constructor(private router: Router) {}

  navigateToAbout(): void {
    this.router.navigate(['/client/about']);
  }
}