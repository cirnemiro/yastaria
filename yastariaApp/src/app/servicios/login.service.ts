
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/modelos/login';
import { Observable } from 'rxjs/internal/Observable';
import { environment }
 from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }


  addLoginToAPI(login: Login): Observable<Login> {
    return this._http.post<Login>(`${environment.API_URL}/auth`, login);
  }

}