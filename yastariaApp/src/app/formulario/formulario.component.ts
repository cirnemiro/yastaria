import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../modelos/usuarios';
import { UsuariosService } from '../servicios/usuarios.service';
@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  nuevoUsuario = new Usuario(0,0,null,null,null,null,null,null,0,null,null,null,null, null, null,);

  constructor(private _userServ: UsuariosService, private _router: Router) { }

  ngOnInit() {
  }
  guardarFormulario() {
    console.log('Formulario:', this.nuevoUsuario);
    this._userServ.addUsuarioToAPI(this.nuevoUsuario).subscribe(nuevoUsuario => {
      console.log('respuesta post:', nuevoUsuario);
      this._router.navigate(['/']);
    });
  }

}
