import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientAboutComponent } from './client-about/client-about.component';
import { ClientServiceComponent } from './client-service/client-service.component';
import { ClientBlogComponent } from './client-blog/client-blog.component';
import { ClientProjectComponent } from './client-project/client-project.component';
import { ClientServiceDetailComponent } from './client-service-detail/client-service-detail.component';
import { LoginnComponent } from './loginn/loginn.component';
import { RegisterrComponent } from './registerr/registerr.component';

const routes: Routes = [
  { path: '', component: ClientComponent },
  { path: 'about', component: ClientAboutComponent},
  { path: 'service', component: ClientServiceComponent},
  { path: 'blog', component: ClientBlogComponent},
  { path: 'project', component: ClientProjectComponent},
  { path: 'services/:id', component: ClientServiceDetailComponent },
  { path: 'login', component: LoginnComponent},
  { path: 'register', component: RegisterrComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
