import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; 

@Component({
  selector: 'app-acccoutlist',
  templateUrl: './acccoutlist.component.html',
  styleUrls: ['./acccoutlist.component.css']
})
export class AcccoutlistComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe({
      next: (data: { message: string, users: any[] }) => {
        console.log(data); // In dữ liệu ra console để kiểm tra
        if (Array.isArray(data.users)) {
          this.users = data.users;
        } else {
          // Xử lý trường hợp khi không có users
          console.error("Không có dữ liệu người dùng trả về từ API");
        }
      },
      error: (error) => {
        // Xử lý khi có lỗi xảy ra
        console.error("Đã xảy ra lỗi:", error);
      }
    });
  }

  deleteUser(userId: string) {
    if (confirm('Bạn có chắc chắn muốn xóa người dùng này không?')) {
      this.userService.deleteUser(userId).subscribe({
        next: () => {
          this.loadUsers();
          alert('Người dùng đã được xóa thành công!');
        },
        error: (error) => {
          alert('Đã xảy ra lỗi khi xóa người dùng!');
        }
      });
    }
  }
}
