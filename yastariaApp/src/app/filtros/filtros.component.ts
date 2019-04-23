import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  constructor() { }
  valoracion = "valoracion";
  zona = "zona";
  tiempo = "tiempo";
  tema = "tema";

  ngOnInit() {
  }

  buscarFiltro() {
    console.log('buscarFiltro:', this.valoracion, this.zona);
  }
}