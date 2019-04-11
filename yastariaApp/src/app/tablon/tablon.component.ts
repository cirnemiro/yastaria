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
        foto: "foto",
        edad: 1
    },
    {
        id: 2,
        nombre: "Max Rex",
        foto: "foto",
        edad: 2
    },
    {
        id: 3,
        nombre: "Taxi Luna",
        foto: "foto",
        edad: 3
    }
  ]
  
  filtrarPorFiltro(str){
    const subconj = this.usuarios.filter(function(aFav){
      return (aFav.nombre.toLowerCase().indexOf(str.toLowerCase()) >= 0);
    });
    return subconj;
    
  }

  constructor() { }

  ngOnInit() {

  }

}
