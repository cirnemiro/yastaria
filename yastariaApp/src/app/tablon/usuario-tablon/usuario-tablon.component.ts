import { Component, OnInit, Input } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
 selector: 'usuario-tablon',
 templateUrl: './usuario-tablon.component.html',
 styleUrls: ['./usuario-tablon.component.scss']
})
export class UsuarioTablonComponent implements OnInit {

constructor(private _userServ: UsuariosService) { }

 usuarios = null;

 @Input()
 usuario;

 estrellas=[0,0,0,0,0];

 ngOnInit() {
  this._userServ.getUsuariosFromAPI().subscribe((listaUsuarios) => {//Consumimos el observable subscribiéndonos y le pasamos una función de callback
    this.usuarios = listaUsuarios;
  });
   for (let index = 1; index <= this.usuario.puntuacion; index++) {
     this.estrellas[index-1]=1;
   }
 }

}