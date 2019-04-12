import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/servicios/chat.service';
import { Chat } from 'src/app/modelos/chat';

@Component({
  selector: 'chat1',
  templateUrl: './chat1.component.html',
  styleUrls: ['./chat1.component.scss']
})
export class Chat1Component implements OnInit {

  constructor(private _chatServ: ChatService) { }

  chat1 = new Chat(23, "2019-04-12 23:45", 3, null);

  listaMsjs:Chat[]=null;


  ngOnInit() {
    this._chatServ.getChatFromAPI().subscribe((msjs) => {//Consumimos el observable subscribiéndonos y le pasamos una función de callback
      this.listaMsjs=msjs;
    });
  }

  enviarMensaje() {
    console.log('Mensaje: ', this.chat1);
    this._chatServ.addChatToAPI(this.chat1).subscribe(chatCambiado => {
      console.log('Info del mensaje: ', chatCambiado);
    });
  }


}
