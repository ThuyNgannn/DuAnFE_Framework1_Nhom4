import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ProjectComponent } from './components/project/project.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { authGuard } from './auth.guard';
const routes: Routes = [
  {path: '', component: ClientLayoutComponent, children:[
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'project', component: ProjectComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'login', component: ContactComponent}
  ]},
  { path: 'admin', component: AdminLayoutComponent, children: [
    // Đường dẫn cho trang quản trị với admin-layout
    { path: '', redirectTo: '/admin', pathMatch: 'full' },
    { path: 'home', component: AdminLayoutComponent, canActivate: [authGuard] },
        // {
        //   path: 'products',
        //   children: [
        //     { path: '', component: AdminProductlistComponent },
        //     { path: 'add', component: ProductAddComponent },
        //     { path: 'edit', component: ProductEditComponent },
        //   ]
        // },
        // {
        //   path: 'category',
        //   children: [
        //     { path: '', component: CatelistComponent },
        //     { path: 'add', component: CateAddComponent },
        //     { path: 'edit', component: CateEditComponent },
        //   ]
        // },
        // {
        //   path: 'accout',
        //   children: [
        //     { path: '', component: AcccoutlistComponent },
        //   ]
        // },
        // { path: '**', component: PagenotfoundComponent }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
