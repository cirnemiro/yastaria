import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tablon',
  templateUrl: './tablon.component.html',
  styleUrls: ['./tablon.component.scss']
})
export class TablonComponent implements OnInit {
  filtro="";

  usuarios = [
    {
        id: 1,
        nombre: "Taxi Ginna",
        foto: "assets/usuario_vacio.png",
        puntuacion: 1
    },
    {
        id: 2,
        nombre: "Max Rex",
        foto: "assets/usuario_vacio.png",
        puntuacion: 2
    },
    {
        id: 3,
        nombre: "Taxi Luna",
        foto: "assets/usuario_vacio.png",
        puntuacion: 3
    }
  ]
  
  filtrarPorFiltro(str){
    console.log(this.usuarios)
    const subconj = this.usuarios.filter(function(aFav){
      return (aFav.nombre.toLowerCase().indexOf(str.toLowerCase()) >= 0);
    });
    return subconj;
    
  }

  constructor() { }

  ngOnInit() {

  }

}
