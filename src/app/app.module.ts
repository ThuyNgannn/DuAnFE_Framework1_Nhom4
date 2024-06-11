import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module'; //
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ProjectComponent } from './components/project/project.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ProjectComponent,
    BlogComponent,
    ContactComponent,
    ClientLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule  // Thêm dòng này
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
