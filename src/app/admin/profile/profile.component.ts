import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string = '';
  userDetails: any;
  errorMessage: string = ''; // Khai báo và khởi tạo thuộc tính errorMessage

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.userId = id;
        this.getUserDetails();
      } else {
        this.errorMessage = 'Không tìm thấy thông tin người dùng.'; // Xử lý khi không có ID
      }
    });
  }

  getUserDetails(): void {
    this.userService.getUserById(this.userId).subscribe(
      (data) => {
        if (data.user) {
          this.userDetails = data.user;
          console.log('Thông tin người dùng:', this.userDetails);
        } else {
          this.errorMessage = 'Không tìm thấy thông tin người dùng.';
        }
      },
      (error) => {
        this.errorMessage = 'Lỗi khi lấy thông tin người dùng.';
        console.error('Lỗi khi lấy thông tin người dùng:', error);
      }
    );
  }
}
