import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getProfile().subscribe({
      next: profile => {
        this.user = profile;
      },
      error: err => {
        console.log(err);
      }
    });
    
  }
  
}
