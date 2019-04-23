import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablonComponent } from './tablon/tablon.component';
import { UsuarioTablonComponent } from './tablon/usuario-tablon/usuario-tablon.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { Chat1Component } from './chat1/chat1.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { QuienesComponent } from './quienes/quienes.component';
<<<<<<< HEAD
import { FiltrosComponent } from './filtros/filtros.component';
=======
import { UnUsuarioComponent } from './tablon/un-usuario/un-usuario.component';
>>>>>>> 89516f8b8731daff3c4fc979a7b6aa522bb8444b

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TablonComponent,
    UsuarioTablonComponent,
    Chat1Component,
    FormularioComponent,
    FooterComponent,
    NavComponent,
    QuienesComponent,
<<<<<<< HEAD
    FiltrosComponent
=======
    UnUsuarioComponent
>>>>>>> 89516f8b8731daff3c4fc979a7b6aa522bb8444b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }