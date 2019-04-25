import { Component, OnInit } from '@angular/core';
import { Chat } from '../modelos/chat';
import { ChatService } from '../servicios/chat.service';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'chat',
  templateUrl: './chat1.component.html',
  styleUrls: ['./chat1.component.scss']
})
export class ChatComponent implements OnInit {

  // chats:Chat[] = [
  //   new Chat(0,'jjkajjlk' ),
  //   new Chat(1,'jjkajjlk' ),
  // ];

  conversaciones = null;
  idOrig = null;
  idDest = null;
  nombreDestino = [];


  constructor(private _chatServ: ChatService, private _userServ: UsuariosService) { }

  ngOnInit() {
    this._chatServ.getUsuariosChatAPI().subscribe(chatsDelServ => {
      //console.log("chatsDelServ",chatsDelServ);
      this.conversaciones = chatsDelServ;
    });

    this._userServ.getUsuariosFromAPI().subscribe(dat => {
      console.log("usuariosDelServ", dat);

      //console.log("foundB", this.conversaciones.length);
      for (let i = 0; i < this.conversaciones.length; i++) {
        
        //console.log("found1", this.conversaciones[i].idDest);
        for (let u = 0; u < dat.length; u++) {
          //console.log("found2", dat[u]._id);
          if (dat[u].id == this.conversaciones[i].idDest) {
            this.nombreDestino.push(dat[u].nombre);
            console.log("found", this.nombreDestino);
          }
        }
      }
    });

  }

  // getUsuarioById(uid){
  //   if(this.usuarios) return this.usuarios.find(unU => unU.id===uid);
  // }


}
