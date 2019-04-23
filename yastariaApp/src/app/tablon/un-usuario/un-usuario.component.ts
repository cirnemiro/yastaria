import { Component, OnInit, Input } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuarios';

@Component({
  selector: 'app-un-usuario',
  templateUrl: './un-usuario.component.html',
  styleUrls: ['./un-usuario.component.scss']
})
export class UnUsuarioComponent implements OnInit {

 usuarios = null;
 unUsuario: Usuario = null;
 estrellas=[0,0,0,0,0];
 votacion = 0;

  constructor(private _userServ: UsuariosService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(parametros => {
      const userId = parametros['id'];
      console.log('id:', userId);
      this._userServ.getUsuarioById(userId).subscribe(user => {
        this.unUsuario = user;
        console.log('user:', user);
        // for (let index = 1; index <= this.unUsuario.puntuacion; index++) {
        //   this.estrellas[index-1]=1;
        // }
      })
    });
  }
  guardarFormulario(){
    this._route.params.subscribe(parametros => {
      const userId = parametros['id'];
      console.log(' votacion:', this.votacion);
      console.log('id:', userId);
      this._userServ.getUsuarioById(userId).subscribe(user => {
        this.unUsuario = user;
        console.log('user:', user);
        this.unUsuario.puntuacion=(parseInt(this.votacion)+parseInt(this.unUsuario.puntuacion))/2;
        console.log(' this.unUsuario.puntuacion:',  this.unUsuario.puntuacion);
      })
    })
 }

  // ngOnInit() {
  //   this._route.params.subscribe(parametros => {
  //     const userId = parametros['id'];
  //     console.log('id:', userId);
  //     this._userServ.ge().subscribe(users => {
  //       this.usuarios = users;
  //       console.log('this.usuarios:', this.usuarios);
  //       this.unUsuario = this.usuarios.filter(user => user._id === userId);
  //       console.log('this.unUsuario:', this.unUsuario);
  //     })
  //   });
  // }
  

}
