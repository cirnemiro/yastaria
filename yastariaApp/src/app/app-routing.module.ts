import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioTablonComponent } from './tablon/usuario-tablon/usuario-tablon.component';

const routes: Routes = [
  {path: 'usuario', component:UsuarioTablonComponent,pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
    