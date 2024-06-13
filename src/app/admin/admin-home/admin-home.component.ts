
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  users: any[] = [];
  adminUser: any; 

  constructor(private authService: AuthService, private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe({
      next: (data: { message: string, users: any[] }) => {
        console.log(data);
        if (Array.isArray(data.users)) {
          this.adminUser = data.users.find(user => user.role === 'admin');
          this.users = data.users.filter(user => user.role === 'user' || user.role === 'admin');
        } else {
          console.error("No user data returned from API");
        }
      },
      error: (error) => {
        console.error("Error occurred:", error);
      }
    });
  }
}
