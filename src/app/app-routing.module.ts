import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { ClientRoutingModule } from './client/client-routing.module';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/client/home', pathMatch: 'full' },
  { path: 'client/home', component: ClientHomeComponent },
  { path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard], 
    data: { expectedRole: 'admin' }
  },
  { path: 'client',
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminRoutingModule,
    ClientRoutingModule 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
