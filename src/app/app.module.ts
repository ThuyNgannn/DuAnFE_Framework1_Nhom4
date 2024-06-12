import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './Admin/post.service';
import { UserService } from './Admin/user.service';


import { HomeComponent } from './Admin/home/home.component';
import { AdminLayoutComponent } from './Admin/admin-layout/admin-layout.component';

import { ProductEditComponent } from './Admin/product-edit/product-edit.component';
import { ProductAddComponent } from './Admin/product-add/product-add.component';
import { ProductlistComponent } from './Admin/productlist/productlist.component';

import { AcccoutlistComponent } from './Admin/acccoutlist/acccoutlist.component';

import { PagenotfoundComponent } from './Admin/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    HomeComponent,
    ProductAddComponent,
    AcccoutlistComponent,
    PagenotfoundComponent,
    ProductEditComponent,
    AdminLayoutComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PostService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
