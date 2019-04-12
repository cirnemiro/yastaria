import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chat } from 'src/app/modelos/chat';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private _http:HttpClient) { }


  addChatToAPI(chat1: Chat): Observable<Chat> {
    return this._http.post<Chat>('http://www.mocky.io/v2/5cb05f58310000850be133be', chat1);
  }

}
