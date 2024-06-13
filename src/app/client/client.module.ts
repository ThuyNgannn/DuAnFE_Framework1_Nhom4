import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientAboutComponent } from './client-about/client-about.component';
import { ClientBlogComponent } from './client-blog/client-blog.component';
import { ClientFooterComponent } from './client-footer/client-footer.component';
import { ClientHeaderComponent } from './client-header/client-header.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientServiceComponent } from './client-service/client-service.component';
import { ClientProjectComponent } from './client-project/client-project.component';
import { ClientServiceDetailComponent } from './client-service-detail/client-service-detail.component';
import { LoginnComponent } from './loginn/loginn.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { RegisterrComponent } from './registerr/registerr.component';


@NgModule({
  declarations: [
    ClientComponent,
    ClientAboutComponent,
    ClientBlogComponent,
    ClientFooterComponent,
    ClientHeaderComponent,
    ClientHomeComponent,
    ClientServiceComponent,
    ClientProjectComponent,
    ClientServiceDetailComponent,
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
