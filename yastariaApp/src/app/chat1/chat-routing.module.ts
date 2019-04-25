import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversacionComponent } from './conversacion/conversacion.component';

const routes: Routes = [
  {path:'', component: ConversacionComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
