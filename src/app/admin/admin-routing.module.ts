import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../auth.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProductlistComponent } from './admin-productlist/admin-productlist.component';
import { AdminProductAddComponent } from './admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './admin-product-edit/admin-product-edit.component';
import { AdminAcccoutlistComponent } from './admin-acccoutlist/admin-acccoutlist.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [{

  path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminHomeComponent },
      { path: 'product', component: AdminProductlistComponent},
      { path: 'productadd', component: AdminProductAddComponent},
      { path: 'product/:id', component: AdminProductEditComponent},
      { path: 'userlist', component: AdminAcccoutlistComponent},
      { path: 'profile/:id', component: ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
