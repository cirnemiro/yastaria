import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'tablon',
  templateUrl: './tablon.component.html',
  styleUrls: ['./tablon.component.scss']
})
export class TablonComponent implements OnInit {
  filtro="";

  usuarios = null;

  constructor(private _userServ: UsuariosService) { }

  ngOnInit() {
    // this.usuarios = this._userServ.getUsuarios();
    // console.log(JSON.stringify(this.usuarios));
    this._userServ.getUsuariosFromAPI().subscribe((listaUsuarios) => {//Consumimos el observable subscribiéndonos y le pasamos una función de callback
      this.usuarios = listaUsuarios;
    });
  }
  // filtrarPorFiltro(str, proyId) {
  //   if(this.usuarios){
  //     const subconj = this.usuarios.filter(function (aUser) {
  //       const tiene_nombre = aUser.nombre.toLowerCase().indexOf(str.toLowerCase()) >= 0;
  //       const tiene_descr = aUser.descripcion.toLowerCase().indexOf(str.toLowerCase()) >= 0;
  //       const es_del_proy = proyId ? aUser.proyecto === parseInt(proyId) : true;
  //       if ((tiene_nombre || tiene_descr) && es_del_proy) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //     return subconj;
  //   } else {
  //     return this.usuarios;
  //   }
  // }
}
