import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';
import { Observable, BehaviorSubject } from 'rxjs';
import { Chat } from '../modelos/chat';
import { Mensage } from '../modelos/mensaje';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private _mensajes = [];
  private _msgsObservable: Observable<any>;
  private $msgsObserver = new BehaviorSubject(this._mensajes);
  username = 0;


  constructor(private _http: HttpClient, private socket: Socket, private _chatService: ChatService, private _route: ActivatedRoute) {
    

    this.socket.on('msj', (data) => {
      console.log('data:', data, this._mensajes);
      this.receiveMess(data);
    });
  }


  receiveMess(data){
      this._mensajes.push(data);
      this.$msgsObserver.next(this._mensajes);
    
  }

  sendMess(msg) {

    console.log('enviando:', msg)
    this._mensajes.push(msg);
    this.socket.emit('msj', msg);
    this.$msgsObserver.next(this._mensajes);
  }


  getMensajes(): Observable<any> {
    this._msgsObservable = this.$msgsObserver.asObservable();
    console.log("this._msgsObservable", this._msgsObservable);
    return this._msgsObservable;
  }

  getUsuariosChatAPI(): Observable<Chat[]> {
    return this._http.get<Chat[]>('http://172.27.96.127:8080/api/mensajes');
  }

}
