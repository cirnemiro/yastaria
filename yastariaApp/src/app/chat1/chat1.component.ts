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

  chat1 = new Chat(0, "2019-04-12 23:45", 3, null);

  listaMsjs:Chat[]=null;


  ngOnInit() {
    this._chatServ.getChatFromAPI().subscribe((msjs) => {
      this.listaMsjs=msjs;
      this._route.params.subscribe(parametros => {
        const userId = parametros['id'];
        console.log('id:', userId);
        this.chat1.receptor = userId;
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
