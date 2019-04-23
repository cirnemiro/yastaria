import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuarios';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Observable, BehaviorSubject, throwError } from 'rxjs';
=======
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
>>>>>>> c3f0c5d325ae03fa1b6ea2f7f0f7e680506db94b

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  private _usuarios;
<<<<<<< HEAD
=======
  private _usuariosObs: Observable<Usuario[]>;
>>>>>>> c3f0c5d325ae03fa1b6ea2f7f0f7e680506db94b
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

<<<<<<< HEAD
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
=======
  getUsuarioById(id): Observable<Usuario> {
    return this._http.get<Usuario>(`http://localhost:8080/api/usuarios/${id}`);
>>>>>>> c3f0c5d325ae03fa1b6ea2f7f0f7e680506db94b
  }
}