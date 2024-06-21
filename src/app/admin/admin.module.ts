import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AdminRoutingModule } from './admin-routing.module';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminCategorylistComponent } from './admin-categorylist/admin-categorylist.component';
import { AdminCategoryFormComponent } from './admin-category-form/admin-category-form.component';
import { AdminPostlistComponent } from './admin-postlist/admin-postlist.component';
import { AdminPostEditComponent } from './admin-post-edit/admin-post-edit.component';
import { AdminPostAddComponent } from './admin-post-add/admin-post-add.component';
import { AuthGuard } from '../auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { AccountAddComponent } from './account-add/account-add.component';
import { AccountEditComponent } from './account-edit/account-edit.component';


@NgModule({
  declarations: [
    AdminProfileComponent,
    AdminHomeComponent,
    AdminUserComponent,
    AdminCategorylistComponent,
    AdminCategoryFormComponent,
    AdminPostlistComponent,
    AdminPostEditComponent,
    AdminPostAddComponent,
    AdminHeaderComponent,
    AccountComponent,
    AccountAddComponent,
    AccountEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard]
})
export class AdminModule { }
