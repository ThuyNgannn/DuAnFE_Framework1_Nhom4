import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { ClientComponent } from './client.component';
import { ClientBlogComponent } from './client-blog/client-blog.component';
import { ClientProjectComponent } from './client-project/client-project.component';
import { ClientAboutComponent } from './client-about/client-about.component';
import { ClientPostComponent } from './client-post/client-post.component';
import { ClientPostDetailComponent } from './client-post-detail/client-post-detail.component';
import { LoginnComponent } from './loginn/loginn.component';
import { RegisterrComponent } from './registerr/registerr.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginnComponent},
  { path: 'register', component: RegisterrComponent},
  { path: 'home', component: ClientComponent },
  { path: 'profile', component: ClientProfileComponent},
  { path: 'blog', component: ClientBlogComponent},
  { path: 'project', component: ClientProjectComponent},
  { path: 'about', component: ClientAboutComponent},
  { path: 'post', component: ClientPostComponent},
  { path: 'post/:id', component: ClientPostDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
