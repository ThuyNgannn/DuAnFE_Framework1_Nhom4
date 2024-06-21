import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  users: any[] = [];
  isAdmin: boolean = false;

  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadUsers();
    this.checkAdminRole();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error loading users', error);
      }
    );
  }

  checkAdminRole(): void {
    this.isAdmin = this.authService.hasRole(['admin']);
  }

  toggleStatus(userId: string): void {
    if (!this.isAdmin) {
      console.error('Permission denied: Only admins can toggle user status.');
      return;
    }
    this.userService.toggleUserStatus(userId).subscribe(
      (data) => {
        const index = this.users.findIndex((user) => user._id === userId);
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
