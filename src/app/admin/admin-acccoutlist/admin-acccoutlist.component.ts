import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-admin-acccoutlist',
  templateUrl: './admin-acccoutlist.component.html',
  styleUrls: ['./admin-acccoutlist.component.css'],
})
export class AdminAcccoutlistComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe({
      next: (data: { message: string; users: any[] }) => {
        console.log(data); // In dữ liệu ra console để kiểm tra
        if (Array.isArray(data.users)) {
          this.users = data.users;
        } else {
          console.error('Không có dữ liệu người dùng trả về từ API');
        }
      },
      error: (error) => {
        console.error('Đã xảy ra lỗi khi lấy danh sách người dùng:', error);
      },
    });
  }

  toggleUserStatus(userId: string, currentStatus: string) {
    const newStatus = currentStatus === 'đang hoạt động' ? 'ngưng hoạt động' : 'đang hoạt động';
    this.userService.updateUserStatus(userId, newStatus).subscribe({
      next: (data: any) => {
        console.log('Cập nhật trạng thái thành công:', data);
        this.loadUsers(); // Load lại danh sách người dùng sau khi cập nhật
      },
      error: (error) => {
        console.error('Đã xảy ra lỗi khi cập nhật trạng thái:', error);
        // Xử lý lỗi một cách rõ ràng, có thể thông báo cho người dùng hoặc ghi log
        alert('Đã xảy ra lỗi khi cập nhật trạng thái người dùng. Vui lòng thử lại sau.');
      },
    });
  }
}
