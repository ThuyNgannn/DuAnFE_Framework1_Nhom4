import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginnComponent } from './client/loginn/loginn.component';
const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginnComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard] },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/client', pathMatch: 'full' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
