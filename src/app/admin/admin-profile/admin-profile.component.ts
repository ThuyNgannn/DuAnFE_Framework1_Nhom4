import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getProfile().subscribe(
      profile => {
        this.user = profile;
      },
      err => {
        console.log(err);
      }
    );
  }
}
