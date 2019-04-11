import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'usuario-tablon',
  templateUrl: './usuario-tablon.component.html',
  styleUrls: ['./usuario-tablon.component.scss']
})
export class UsuarioTablonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  usuario;

}
