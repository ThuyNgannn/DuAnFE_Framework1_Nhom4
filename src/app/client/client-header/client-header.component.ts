import { Component, ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.css']
})
export class ClientHeaderComponent {
  constructor(public authService: AuthService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.authService.roleChanged.subscribe(() => {
      this.cdr.detectChanges();
    });
  }


  showAddForm(): void {
    // Logic của phương thức showAddForm
    console.log("showAddForm called");
  }
  logout() {
    this.authService.logout();
  }
}
