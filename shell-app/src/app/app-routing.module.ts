import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
   path: 'home',
   loadChildren: () =>
     import('./modules/home/home.module').then((m) => m.HomeModule),
 },
 {
   path: 'admins',
   loadChildren: () =>
     import('remote-app/AdminsModule').then((m) => m.AdminsModule),
 },
 {
   path: '**',
   redirectTo: '/',
 },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
