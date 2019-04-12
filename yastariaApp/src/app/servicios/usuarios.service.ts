import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuarios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  private _usuarios;
  //  = [
  //   new Usuario(1, "Lola", "Lorem ipsum, dolor sit amet", "assets/usuario_vacio.png", 2),
  //   new Usuario(2, "Lola", "Lorem ipsum, dolor sit amet", "assets/usuario_vacio.png", 2),
  //   new Usuario(3, "Lola", "Lorem ipsum, dolor sit amet", "assets/usuario_vacio.png", 2),
  //   new Usuario(4, "Lola", "Lorem ipsum, dolor sit amet", "assets/usuario_vacio.png", 2),
  //   new Usuario(5, "Lola", "Lorem ipsum, dolor sit amet", "assets/usuario_vacio.png", 2),
  //   new Usuario(6, "Lola", "Lorem ipsum, dolor sit amet", "assets/usuario_vacio.png", 2)
  // ];

  constructor(private _http: HttpClient) { }

  // getUsuarios(){
  //   return this._usuarios;
  // }

  getUsuariosFromAPI():Observable<Usuario[]> {
    return this._http.get<Usuario[]>('http://www.mocky.io/v2/5caf4a1b3400009b3dab726d');
  };

  // getUsuariosById(unId) {
  //   return this._usuarios.find(function (aUser) {
  //     return aUser.id == unId;
  //   });
  // }

  addUsuario(unuser: Usuario){
    this._usuarios.push(unuser);
  }

  addUsuarioToAPI(unUser: Usuario) {
    return this._http.post<Usuario>('http://www.mocky.io/v2/5caf4a1b3400009b3dab726d',unUser);
    //enviar usuario a la API
  }
}