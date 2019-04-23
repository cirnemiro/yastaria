import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  constructor() { }
  puntuacion = "puntuacion";
  barrio = "barrio";
  tiempo = "tiempo";
  tema = "tema";

@Input()
usuario;

  ngOnInit() {
  }



  buscarFiltro() {
    console.log('buscarFiltro:', this.puntuacion, this.barrio);

  }
}