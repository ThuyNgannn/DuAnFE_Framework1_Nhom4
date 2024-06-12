import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ProjectComponent } from './components/project/project.component';
import { BlogComponent } from './components/blog/blog.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';


const routes: Routes = [
  {path: '', component: ClientLayoutComponent, children:[
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'project', component: ProjectComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'services/:id',component: ServiceDetailComponent}

  ]},
  { path: 'admin', component: AdminLayoutComponent, children: [
    // Đường dẫn cho trang quản trị với admin-layout
    { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    { path: 'home', component: AdminHomeComponent, canActivate: [AuthGuard] },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
