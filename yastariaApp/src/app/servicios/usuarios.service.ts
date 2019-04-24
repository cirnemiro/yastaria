import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuarios';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment }
 from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  private _usuarios;
  private _usuariosObs: Observable<Usuario[]>;
  private $usuariosSub = new BehaviorSubject(this._usuarios);

  constructor(private _http: HttpClient) { }

  getUsuariosFromAPI():Observable<Usuario[]> {
    return this._http.get<Usuario[]>(`${environment.API_URL}/usuarios`);
  };

  addUsuario(unuser: Usuario){
    this._usuarios.push(unuser);
  }

  addUsuarioToAPI(unUser: Usuario) {
    return this._http.post<Usuario>(`${environment.API_URL}/usuarios`,unUser);
  }

  getUsuarioById(id): Observable<Usuario> {
    return this._http.get<Usuario>(`${environment.API_URL}/usuarios/${id}`);
  }

  actualizarPuntuacion(nuevaPuntuacion: number){
    return this._http.post<Usuario>(`${environment.API_URL}/usuarios`,nuevaPuntuacion);
  }
}