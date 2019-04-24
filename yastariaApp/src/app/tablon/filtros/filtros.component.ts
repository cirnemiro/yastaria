import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {


  constructor(private _filtrar:UsuariosService) { }
  puntuacion = '';
  barrio = '';
  tiempo = '';
  tema = '';



  ngOnInit() {
  }



  buscarFiltro() {
    console.log('buscarFiltro:', this.puntuacion, this.tiempo, this.tema, this.barrio);
    const filtros={
      barrio:this.barrio,
      puntuacion:this.puntuacion,
      tiempo:this.tiempo,
      tema:this.tema
    }
    this._filtrar.filtrarUsuarios(filtros);



  }
}