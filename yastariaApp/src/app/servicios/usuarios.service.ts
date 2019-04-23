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

  getUsuariosFromAPI(filtros: any): Observable<Usuario[]> {
    const options = {
      params: filtros ? filtros : null
    };
    return this._http.get<Usuario[]>('http://localhost:8080/api/usuarios', options);
  };

  addUsuario(unuser: Usuario) {
    this._usuarios.push(unuser);
  }

  addUsuarioToAPI(unUser: Usuario) {
    return this._http.post<Usuario>('http://localhost:8080/api/usuarios', unUser);
  }

  getUsuarioById(id): Observable<Usuario> {
    return this._http.get<Usuario>(`http://localhost:8080/api/usuarios/${id}`);
  }

  filtrarUsuarios(filtros: any) {
    this.getUsuariosFromAPI(filtros).subscribe(data => {
      console.log('usuarios filtrados:', data);
    })
  }

}