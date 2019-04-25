import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule  } from '@angular/forms';

import { ChatRoutingModule } from './chat-routing.module';
import { ConversacionComponent } from './conversacion/conversacion.component';

@NgModule({
  declarations: [ConversacionComponent, ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule
  ]
})
export class ChatModule { }
