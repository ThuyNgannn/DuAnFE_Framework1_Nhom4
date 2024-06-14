import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminAcccoutlistComponent } from './admin-acccoutlist/admin-acccoutlist.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProductAddComponent } from './admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './admin-product-edit/admin-product-edit.component';
import { AdminProductlistComponent } from './admin-productlist/admin-productlist.component';
import { AuthGuard } from '../auth.guard';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFoterComponent } from './admin-foter/admin-foter.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminCategorylistComponent } from './admin-categorylist/admin-categorylist.component';
import { AdminCategoryFormComponent } from './admin-category-form/admin-category-form.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminAcccoutlistComponent,
    AdminHomeComponent,
    AdminProductAddComponent,
    AdminProductEditComponent,
    AdminProductlistComponent,
    AdminHeaderComponent,
    AdminFoterComponent,
    ProfileComponent,
    AdminCategorylistComponent,
    AdminCategoryFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard]
})
export class AdminModule { }
