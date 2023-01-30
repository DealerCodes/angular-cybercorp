import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import {HomeComponent} from './Components/home/home.component'
import {CursosComponent} from './Components/cursos/cursos.component'

const routes: Routes = [
  //esto redirecciona a la pagina a mostrar cuando el usuario ingrese
  {path: '', redirectTo:"home", pathMatch:'full'},
  //rutas de los componentes
  {path: 'home', component: HomeComponent},
  {path: 'cursos', component: CursosComponent},
  //si el usuario pone una ruta que no sea ninguna de estas se redirecciona a este path
  {path: '**',redirectTo:"home", pathMatch:'full'}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
