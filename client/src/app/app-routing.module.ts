import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './frontend/home/home.component';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '*',
    redirectTo: 'account/login'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'account/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
