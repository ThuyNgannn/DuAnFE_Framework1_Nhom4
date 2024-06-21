import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';  // Import Router nếu bạn đang sử dụng nó
@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.css']
})
export class ClientHeaderComponent implements OnInit {
  searchKeyword: string = '';
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  
  }


  showAddForm(): void {
    // Logic của phương thức showAddForm
    console.log("showAddForm called");
  }

  logout() {
    this.authService.logout();
  }

  onSearch() {
    if (this.searchKeyword.trim() !== '') {
      this.router.navigate(['/search'], { queryParams: { q: this.searchKeyword } });
    }
  }
}
