import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioTablonComponent } from './tablon/usuario-tablon/usuario-tablon.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TablonComponent } from './tablon/tablon.component';
import { Chat1Component } from './chat1/chat1.component';


const routes: Routes = [
  { path: 'tablon', component: TablonComponent, pathMatch: 'full' },
  { path: 'chat', component: Chat1Component, pathMatch: 'full' },
  { path: 'usuario', component: UsuarioTablonComponent, pathMatch: 'full' },
  { path: 'registro', component: FormularioComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'tablon', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
