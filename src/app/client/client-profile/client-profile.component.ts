import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {
  user: any;
  selectedFile: File | null = null;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getProfile().subscribe(
      (profile) => {
        this.user = profile;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  submitAvatarUpdate() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('avatar', this.selectedFile, this.selectedFile.name);

      this.authService.updateAvatar(formData).subscribe(
        () => {
          alert('Cập nhật avatar thành công!');
          // Reload lại thông tin profile sau khi cập nhật thành công
          this.authService.getProfile().subscribe(
            (profile) => {
              this.user = profile;
            },
            (err) => {
              console.log(err);
            }
          );
        },
        (err) => {
          console.error('Lỗi:', err);
          alert('Cập nhật avatar thất bại!');
        }
      );
    } else {
      alert('Vui lòng chọn một tập tin để cập nhật avatar!');
    }
  }
}
