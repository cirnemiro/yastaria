import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuarios';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  private _usuarios;
  private $usuariosSub = new BehaviorSubject(this._usuarios);

  constructor(private _http: HttpClient) { }

  getUsuariosFromAPI():Observable<Usuario[]> {
    return this._http.get<Usuario[]>('http://localhost:8080/api/usuarios');
  };

  addUsuario(unuser: Usuario){
    this._usuarios.push(unuser);
  }

  addUsuarioToAPI(unUser: Usuario) {
    return this._http.post<Usuario>('http://localhost:8080/api/usuarios',unUser);
  }

  getUsuarioById(id: number):void {
    this._http.get<Usuario[]>('http://localhost:8080/api/usuarios').subscribe(
      data => {
        this._usuarios = data.filter( unUsuario => unUsuario.id == id );
        this.$usuariosSub.next(this._usuarios);
      },
      error => {
        console.log("Error:", error);
        return throwError(error);
      }
    );
  }

  buscarUsuario(busqueda: string):void {
    this._http.get<Usuario[]>('http://localhost:8080/api/usuarios').subscribe(
      data => {
        this._usuarios = data.filter( unUsuario => unUsuario.nombre.toLowerCase().indexOf(busqueda.toLowerCase())>=0 );
        this.$usuariosSub.next(this._usuarios);
      },
      error => {
        console.log("Error:", error);
        return throwError(error);
      }
    );
  }
}