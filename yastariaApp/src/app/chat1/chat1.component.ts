import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/servicios/chat.service';
import { Chat } from 'src/app/modelos/chat';

@Component({
  selector: 'chat1',
  templateUrl: './chat1.component.html',
  styleUrls: ['./chat1.component.scss']
})
export class Chat1Component implements OnInit {

  constructor(private _chatServ: ChatService ) { }

  chat1 = new Chat(null, null, null, null);
  

  ngOnInit() {
  }

  formularioChat(){
    console.log('Nombre usuarioE: ', this.chat1.usuarioEmisor);
    console.log('Hora: ', this.chat1.hora);
    console.log('Nombre usuarioR: ', this.chat1.usuarioReceptor);
    console.log('Mensaje: ', this.chat1.mensaje);
    this._chatServ.addChatToAPI(this.chat1).subscribe(chat1=>{
      console.log('Info del mensaje: ',chat1);
    });

    this._chatServ.getChatFromAPI().subscribe((chat1) => {//Consumimos el observable subscribiéndonos y le pasamos una función de callback
      console.log('Info del mensaje: ',chat1);
   });
  
  }

  
}
