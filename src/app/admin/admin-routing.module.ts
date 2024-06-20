import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminPostlistComponent } from './admin-postlist/admin-postlist.component';
import { AdminPostAddComponent } from './admin-post-add/admin-post-add.component';
import { AdminPostEditComponent } from './admin-post-edit/admin-post-edit.component';
import { AdminCategorylistComponent } from './admin-categorylist/admin-categorylist.component';
import { AdminCategoryFormComponent } from './admin-category-form/admin-category-form.component';
import { AccountComponent } from './account/account.component';
const routes: Routes = [
  { path: 'admin', component: AdminHomeComponent },
  { path: 'admin-profile', component: AdminProfileComponent },
  { path: 'admin-post', component: AdminPostlistComponent },
  { path: 'post-add', component: AdminPostAddComponent},
  { path: 'admin-post/:id', component: AdminPostEditComponent },
  { path: 'category', component: AdminCategorylistComponent},
  { path: 'category/add', component: AdminCategoryFormComponent},
  { path: 'category/edit/:id', component: AdminCategoryFormComponent},
  { path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
