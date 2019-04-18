import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuarios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  private _usuarios;

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
}