import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/servicios/chat.service';
import { Chat } from 'src/app/modelos/chat';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'chat1',
  templateUrl: './chat1.component.html',
  styleUrls: ['./chat1.component.scss']
})
export class Chat1Component implements OnInit {

  constructor(private _chatServ: ChatService, private _route: ActivatedRoute) { }

  chat1 = new Chat(0, 0, 0, null);

  listaMsjs:Chat[]=null;


  ngOnInit() {
    this._chatServ.getChatFromAPI().subscribe((msjs) => {
      this.listaMsjs=msjs;
      this._route.params.subscribe(parametros => {
        const userId = parametros['id'];
        let tiempo = Date.now();
        console.log('id:', userId);
        this.chat1.receptor = userId;
        this.chat1.fecha = tiempo;
        this.chat1.emisor = 5;
      });
    });
  }

  enviarMensaje() {
    console.log('Mensaje: ', this.chat1);
    this._chatServ.addChatToAPI(this.chat1).subscribe(chatCambiado => {
      console.log('Info del mensaje: ', chatCambiado);
    });
  }


}
