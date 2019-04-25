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
  unUsuario: Usuario = null;
  estrellas = [0, 0, 0, 0, 0];
  votacion = 0;

  constructor(private _userServ: UsuariosService, private _route: ActivatedRoute) { }


  ngOnInit() {
    this._route.params.subscribe(parametros => {
      const userId = parametros['id'];
      console.log('id:', userId);
      this._userServ.getUsuarioById(userId).subscribe(user => {
        this.unUsuario = user;
        console.log('user:', user);
        for (let index = 1; index <= this.unUsuario.puntuacion; index++) {
          this.estrellas[index-1]=1;
        }
        for (let index = this.unUsuario.puntuacion-1; index = 0; index--) {
          this.estrellas[index]=0;
        }
        
        
      })
    });
    
  }
  guardarFormulario() {
    this._route.params.subscribe(parametros => {
      const userId = parametros['id'];
      console.log(' votacion:', this.votacion);
      console.log('id:', userId);
      this._userServ.getUsuarioById(userId).subscribe(user => {
        this.unUsuario = user;
      })
    })
  }



  updatePuntc() {
    // this.votacion = parseInt(this.votacion);
    console.log(this.votacion);
    console.log(this.unUsuario);
    
    
    console.log(' this.votacion:', this.votacion);
  
    if(this.unUsuario.puntuacion==0 || this.unUsuario.puntuacion==null){
      this.unUsuario.puntuacion=this.votacion;  
      this.unUsuario.contpunt=1;  
    }else if(this.unUsuario.puntuacion>5){
      this.unUsuario.puntuacion=5;
    }else{
      this.unUsuario.contpunt++;
      console.log('this.unUsuario.contpunt:',this.unUsuario.contpunt);
      console.log(' this.unUsuario.puntuacion:', this.unUsuario.puntuacion);
      this.unUsuario.puntuacion = (this.unUsuario.puntuacion)*(1/this.unUsuario.contpunt)*(this.unUsuario.contpunt-1) + parseInt(this.votacion.toString())*(1/this.unUsuario.contpunt);
      console.log(' this.unUsuario.puntuacion:', this.unUsuario.puntuacion);
      console.log(' this.unUsuario:', this.unUsuario);
    }
    
    
    this._userServ.actualizarPuntuacion(this.unUsuario).subscribe(data => {
      console.log('usuarioAct:', data);
      console.log('elusuario',this.unUsuario)
      for (let index = 1; index <= 5; index++) {
        this.estrellas[index-1]=0;
      
      }
      for (let index = 1; index <= this.unUsuario.puntuacion; index++) {
        this.estrellas[index-1]=1;
      
      }
      // for (let index = this.unUsuario.puntuacion-1; index = 0; index--) {
      //   this.estrellas[index]=0;
      // }

    });
  }
}
