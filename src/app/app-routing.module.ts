import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./users/all-users/all-users.module')
      .then(m => m.AllUsersModule),
  },
  {
    path: 'create-user',
    loadChildren: () => import('./users/create-user/create-user.module')
      .then(m => m.CreateUserModule),
  }, {
    path: 'edit-user',
    loadChildren: () => import('./users/edit-user/edit-user.module')
      .then(m => m.EditUserModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
