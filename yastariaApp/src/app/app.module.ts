import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablonComponent } from './tablon/tablon.component';
import { UsuarioTablonComponent } from './tablon/usuario-tablon/usuario-tablon.component';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TablonComponent,
    UsuarioTablonComponent,
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
