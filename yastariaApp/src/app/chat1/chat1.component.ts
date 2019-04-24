import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/servicios/chat.service';
import { Chat } from 'src/app/modelos/chat';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DocumentService } from './services/document.service';

@Component({
  selector: 'chat1',
  templateUrl: './chat1.component.html',
  styleUrls: ['./chat1.component.scss']
})
export class Chat1Component implements OnInit {

   
  constructor(private _chatServ: ChatService, private _route: ActivatedRoute, private documentService: DocumentService) { }

  chat1 = new Chat(0, 0, 0, null);
  listaMsjs:Chat[]=null;

  documents: Observable<string[]>;
  currentDoc: string;
  private _docSub: Subscription;


  ngOnInit() {
    // this._chatServ.getChatFromAPI().subscribe((msjs) => {
    //   this.listaMsjs=msjs;
    //   this._route.params.subscribe(parametros => {
    //     const userId = parametros['id'];
    //     let tiempo = Date.now();
    //     console.log('id:', userId);
    //     this.chat1.receptor = userId;
    //     this.chat1.fecha = tiempo;
    //     this.chat1.emisor = 5;
    //   });
    // });

    this.documents = this.documentService.documents;
    this._docSub = this.documentService.currentDocument.subscribe(doc => this.currentDoc = doc.id);
  }

  enviarMensaje() {
    console.log('Mensaje: ', this.chat1);
    this._chatServ.addChatToAPI(this.chat1).subscribe(chatCambiado => {
      //Tengo que pasar también la id del emisor y la del receptor para que se guarde en la base de datos?
      console.log('Info del mensaje: ', chatCambiado);
    });
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  envia(){
    this.documentService.sendMess({user: this.chat1.emisor, txt:this.chat1.mensaje});
  }


}
