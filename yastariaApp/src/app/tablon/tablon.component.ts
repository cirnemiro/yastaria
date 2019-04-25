import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';
import { Login } from '../modelos/login';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'tablon',
  templateUrl: './tablon.component.html',
  styleUrls: ['./tablon.component.scss']
})
export class TablonComponent implements OnInit {
  filtro="";
  nombre = null;
  usuarios = null;
  categoria= "";
  login = new Login(null, null);

  constructor(private _userServ: UsuariosService, private _logServ: LoginService, private _routerlog: Router) { }

  ngOnInit() {
    this._userServ.getUsuariosFromAPI().subscribe((listaUsuarios) => {//Consumimos el observable subscribiéndonos y le pasamos una función de callback
      this.usuarios = listaUsuarios;
    });
  }

  formularioLogin() {
    console.log('Nombre usuarix: ', this.login);
    this._logServ.addLoginToAPI(this.login).subscribe(token => {});
      let tok = localStorage.getItem('token');
      console.log("tok: ",jwt_decode(tok));
      this.nombre = jwt_decode(tok).nombre;
  }
  
}

