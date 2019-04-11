import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
=======
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablonComponent } from './tablon/tablon.component';
import { UsuarioTablonComponent } from './tablon/usuario-tablon/usuario-tablon.component';
>>>>>>> 1e7c95f8ff6aae15927b67cdb3c3c84f231e6429

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent
=======
    TablonComponent,
    UsuarioTablonComponent,
>>>>>>> 1e7c95f8ff6aae15927b67cdb3c3c84f231e6429
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
