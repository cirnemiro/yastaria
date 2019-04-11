import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/modelos/login';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }


  addLoginToAPI(login: Login): Observable<Login> {
    return this._http.post<Login>('http://www.mocky.io/v2/5caf40683400006f27ab720d', login);
  }

}


