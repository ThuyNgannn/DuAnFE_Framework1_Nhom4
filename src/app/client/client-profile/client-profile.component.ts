import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {
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
