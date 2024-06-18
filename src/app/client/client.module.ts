import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientAboutComponent } from './client-about/client-about.component';
import { ClientBlogComponent } from './client-blog/client-blog.component';
import { ClientFooterComponent } from './client-footer/client-footer.component';
import { ClientHeaderComponent } from './client-header/client-header.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { ClientProjectComponent } from './client-project/client-project.component';
import { ClientPostComponent } from './client-post/client-post.component';
import { ClientPostDetailComponent } from './client-post-detail/client-post-detail.component';
import { FormsModule } from '@angular/forms';
import { LoginnComponent } from './loginn/loginn.component';
import { RegisterrComponent } from './registerr/registerr.component';


@NgModule({
  declarations: [
    ClientComponent,
    ClientAboutComponent,
    ClientBlogComponent,
    ClientFooterComponent,
    ClientHeaderComponent,
    ClientHomeComponent,
    ClientProfileComponent,
    ClientProjectComponent,
    ClientPostComponent,
    ClientPostDetailComponent,
    LoginnComponent,
    RegisterrComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ]
})
export class ClientModule { }
