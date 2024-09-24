import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeLoginComponent } from './home-login/home-login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },  // Ruta para la página de inicio
    { path: 'home', component: HomeLoginComponent },  // Ruta para el componente home-login
    { path: '**', redirectTo: '' }  // Redirigir a home por defecto
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }