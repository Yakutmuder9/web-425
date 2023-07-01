/**
 * Title: app.routing.ts
 * Author: Professor Krasso
 * ModifiedBy: Yakut Ahmedin
 * Date: 24 Jun 2023
 * Description: gpa-calculator-app1
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [{ path: '', component: HomeComponent }]

  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [{ path: 'not-found', component: NotFoundComponent }]

  },
  {
    path: '**',
    redirectTo: 'session/not-found'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
