import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeLoginComponent } from './home-login/home-login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },  
    { path: 'home', component: HomeLoginComponent },  
    { path: '**', redirectTo: '' } 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }