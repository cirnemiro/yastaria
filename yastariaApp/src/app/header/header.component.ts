import { Component, OnInit } from '@angular/core';
import {Login } from 'src/app/modelos/login';
// import { LoginService } from 'src/app/servicios/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'cabecera',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  login= new Login(null, null);
  // private _logServ:LoginService, private _routerlog:Router
  constructor() { }

  ngOnInit() {
  }

  // // formularioLogin(){
  // //   console.log('Nombre usuarix: ', this.login);
  // //   this._logServ.addLoginToAPI(this.login).subscribe(login=>{
  // //     console.log('Contraseña: ',login);
  // //   });
  
  //   }
}