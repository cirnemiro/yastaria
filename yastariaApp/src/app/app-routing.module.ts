import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioComponent } from './formulario/formulario.component';
import { TablonComponent } from './tablon/tablon.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ChatComponent } from './chat1/chat1.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { UnUsuarioComponent } from './tablon/un-usuario/un-usuario.component';



const routes: Routes = [
  { path: 'tablon', component: TablonComponent, pathMatch: 'full' },
  { path: 'chat/:id', component: ChatComponent, pathMatch: 'full' },
  { path: 'usuario/:id', component: UnUsuarioComponent, pathMatch: 'full' },
  { path: 'registro', component: FormularioComponent, pathMatch: 'full' },
  { path: 'quienes-somos', component: QuienesComponent, pathMatch: 'full' },
  { path: 'galeria', component: GaleriaComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'tablon', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
