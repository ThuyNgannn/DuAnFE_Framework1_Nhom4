import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminAcccoutlistComponent } from './admin-acccoutlist/admin-acccoutlist.component';
import { AdminLayoutsComponent } from './admin-layouts/admin-layouts.component';
import { AdminEntitesComponent } from './admin-entites/admin-entites.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminPagenotfoundComponent } from './admin-pagenotfound/admin-pagenotfound.component';
import { AdminProductAddComponent } from './admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './admin-product-edit/admin-product-edit.component';
import { AdminProductlistComponent } from './admin-productlist/admin-productlist.component';
import { AuthGuard } from '../auth.guard';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFoterComponent } from './admin-foter/admin-foter.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminAcccoutlistComponent,
    AdminLayoutsComponent,
    AdminEntitesComponent,
    AdminHomeComponent,
    AdminPagenotfoundComponent,
    AdminProductAddComponent,
    AdminProductEditComponent,
    AdminProductlistComponent,
    AdminHeaderComponent,
    AdminFoterComponent,
    ProfileComponent
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
