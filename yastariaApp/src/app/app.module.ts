import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablonComponent } from './tablon/tablon.component';
import { UsuarioTablonComponent } from './tablon/usuario-tablon/usuario-tablon.component';

@NgModule({
 declarations: [
   AppComponent,
   TablonComponent,
   UsuarioTablonComponent
 ],
 imports: [
   BrowserModule,
   AppRoutingModule,
   FormsModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }