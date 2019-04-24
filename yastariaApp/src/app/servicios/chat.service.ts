import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chat } from 'src/app/modelos/chat';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private _mensajes: Chat[] = [];//_mensajes es de tipo Chat
  private _mensajesObs: Observable<Chat[]>;
  private $mensajesSub = new BehaviorSubject(this._mensajes);

  constructor(private _http: HttpClient) { }

  getChatFromAPI(): Observable<Chat[]> {
    // return this._http.get<Chat[]>('http://www.mocky.io/v2/5cb06ef13100006c00e1344a');

    this._mensajesObs = this.$mensajesSub.asObservable();
    this._http.get<Chat[]>('http://localhost:8080/api/chat').subscribe(
      data => {
        // lo que ve en el mocky se guarda en data
        this._mensajes = data;
        // se actualizan los _mensajes
        this.$mensajesSub.next(this._mensajes);
      },
      error => {
        console.log("Error:", error);
        return throwError(error);
      }
    );

    return this._mensajesObs;
  };

  addChatToAPI(chat1: Chat): Observable<Chat> {
    return this._http.post<Chat>('http://localhost:8080/api/chat', chat1).pipe(
      tap(msjsrec => { 
        this._mensajes.push(msjsrec);
        this.$mensajesSub.next(this._mensajes);
      })
    );
  }


}
