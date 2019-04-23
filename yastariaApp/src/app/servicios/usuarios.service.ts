import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuarios';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  private _usuarios;
  private _usuariosObs: Observable<Usuario[]>;
  private $usuariosSub = new BehaviorSubject(this._usuarios);

  constructor(private _http: HttpClient) { }

  

  // getUsuariosByCategoria(unaCat):Observable<Usuario[]> {
  //   return this._http.get<Usuario[]>('http://www.mocky.io/v2/5caf4a1b3400009b3dab726d').pipe(
  //     tap( (data:Usuario[])=>{
  //       console.log('data:', data);
  //       this._usuarios=data.filter( unU => unU.puntuacion==unaCat);
  //       this.$usuariosSub.next(this._usuarios);        
  //     })
  //   );
  // }

  getUsuariosFromAPI():Observable<Usuario[]> {
    return this._http.get<Usuario[]>('http://localhost:8080/api/usuarios');
  };

  addUsuario(unuser: Usuario){
    this._usuarios.push(unuser);
  }

  addUsuarioToAPI(unUser: Usuario) {
    return this._http.post<Usuario>('http://localhost:8080/api/usuarios',unUser);
  }

  getUsuarioById(id): Observable<Usuario> {
    return this._http.get<Usuario>(`http://localhost:8080/api/usuarios/${id}`);
  }
}