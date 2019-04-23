import { Component, OnInit, Input } from '@angular/core';

@Component({
 selector: 'usuario-tablon',
 templateUrl: './usuario-tablon.component.html',
 styleUrls: ['./usuario-tablon.component.scss']
})
export class UsuarioTablonComponent implements OnInit {

constructor() { }

 @Input()
 usuario;

 estrellas=[0,0,0,0,0];

 ngOnInit() {
      
      for (let index = 1; index <= this.usuario.puntuacion; index++) {
        this.estrellas[index-1]=1;
      }
  }
}