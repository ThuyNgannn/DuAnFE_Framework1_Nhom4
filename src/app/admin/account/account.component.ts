import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.error('Error loading users', error);
      }
    );
  }
  toggleStatus(userId: string): void {
    this.userService.toggleUserStatus(userId).subscribe(
      (data) => {
        const index = this.users.findIndex(user => user._id === userId);
        if (index !== -1) {
          this.users[index].trangThai = data.trangThai;
        }
      },
      (error) => {
        console.error('Error toggling user status:', error);
      }
    );
  }
  
}
