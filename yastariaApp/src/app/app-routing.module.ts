import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioTablonComponent } from './tablon/usuario-tablon/usuario-tablon.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TablonComponent } from './tablon/tablon.component';
import { QuienesComponent } from './quienes/quienes.component';


const routes: Routes = [
  { path: 'tablon', component: TablonComponent, pathMatch: 'full' },
  { path: 'usuario', component: UsuarioTablonComponent, pathMatch: 'full' },
  { path: 'registro', component: FormularioComponent, pathMatch: 'full' },
  { path: 'quienes-somos', component: QuienesComponent, pathMatch: 'full' },

  { path: '', redirectTo: 'tablon', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
