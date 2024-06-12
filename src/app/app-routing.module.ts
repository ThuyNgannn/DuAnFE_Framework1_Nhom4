import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Admin/home/home.component';
import { AdminLayoutComponent } from './Admin/admin-layout/admin-layout.component';

import { ProductlistComponent } from './Admin/productlist/productlist.component';
import { ProductAddComponent } from './Admin/product-add/product-add.component';
import { ProductEditComponent } from './Admin/product-edit/product-edit.component';

import { AcccoutlistComponent } from './Admin/acccoutlist/acccoutlist.component';

import { PagenotfoundComponent } from './Admin/pagenotfound/pagenotfound.component';




import { AuthGuard } from './auth-guard';
import { AuthService } from './auth.service';



const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'products',
        children: [
          { path: '', component: ProductlistComponent },
          { path: 'add', component: ProductAddComponent },
          { path: ':id', component: ProductEditComponent },
        ]
      },
      {
        path: 'accout',
        children: [
          { path: '', component: AcccoutlistComponent },
        ]
      },
      { path: '**', component: PagenotfoundComponent }
    ]
  }
];


      @NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [RouterModule],
      providers: [AuthService,AuthGuard]
      })
      export class AppRoutingModule {
      }