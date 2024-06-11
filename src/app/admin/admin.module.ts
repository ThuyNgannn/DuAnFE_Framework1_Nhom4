import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminHomeComponent,
    DashboardComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
    AdminLayoutComponent
  ]
})
export class AdminModule { }
