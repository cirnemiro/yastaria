import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {
  
  busqueda:string=null;

  constructor(private _userServ:UsuariosService) { }

  ngOnInit() {
  }
  buscar() {

    // this._userServ.buscarUsuario(this.busqueda);

  }

}
