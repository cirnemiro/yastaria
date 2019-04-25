import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablonComponent } from './tablon/tablon.component';
import { UsuarioTablonComponent } from './tablon/usuario-tablon/usuario-tablon.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { ChatComponent } from 'src/app/chat1/chat1.component';
import { ConversacionComponent } from './chat1/conversacion/conversacion.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { QuienesComponent } from './quienes/quienes.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { UnUsuarioComponent } from './tablon/un-usuario/un-usuario.component';
import { FiltrosComponent } from 'src/app/tablon/filtros/filtros.component';
import { FiltroComponent } from './tablon/filtro/filtro.component';
import {environment} from '../environments/environment';

const config: SocketIoConfig = { url: `${environment.CHAT_URL}/usuarios`, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TablonComponent,
    UsuarioTablonComponent,
    ChatComponent,
    FormularioComponent,
    FooterComponent,
    NavComponent,
    QuienesComponent,
    GaleriaComponent,
    UnUsuarioComponent,
    FiltrosComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
