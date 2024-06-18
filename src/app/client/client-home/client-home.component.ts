import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
  
  }


  showAddForm(): void {
    // Logic của phương thức showAddForm
    console.log("showAddForm called");
  }
  logout() {
    this.authService.logout();
  }
}
