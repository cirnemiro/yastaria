import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/servicios/chat.service';
import { Observable, Subscription } from 'rxjs';
import { Mensage } from 'src/app/modelos/mensaje';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
//import { startWith } from 'rxjs/operators';

@Component({
  selector: 'conversacion',
  templateUrl: './conversacion.component.html',
  styleUrls: ['./conversacion.component.scss']
})
export class ConversacionComponent implements OnInit {

  documents: Observable<string[]>;
  currentDoc: string;
  private _docSub: Subscription;

  msgtxt = '';
  username = null;
  losmsgs = null;

  idMsg = null;
  idOrig = null;
  idDest = null;
  texto = '';
  msgHora = null;

  constructor(private _chatService: ChatService, private _route: ActivatedRoute, private _userServ: UsuariosService) { }

  ngOnInit() {

    this._route.params.subscribe(parametros => {
      this.idOrig = parametros.idOrig;
      this.idDest = parametros.idDest;
      //console.log("parametros", parametros);
    });

    this._userServ.getUsuariosFromAPI().subscribe(dat => {
      //console.log("usuariosDelServ", dat);
      for (let i = 0; i < dat.length; i++) {
        //console.log("found1", dat[i]._id);
        if (dat[i].id == this.idDest) {
          this.username = dat[i].nombre;
          //console.log("found", this.username);
        }
      }
    });

    this._chatService.getMensajes().subscribe(data => {
      this.losmsgs = data.filter(unMs => {
        if (
          (unMs.idDest == this.idOrig && unMs.idOrig == this.idDest) || (unMs.idOrig==this.idOrig && unMs.idDest==this.idDest)
        ) return true;
        else return false;
      });
    });
  }

  ngOnDestroy() {
  }

  envia() {
    // console.log("usernameeee", this.username);
    this._chatService.sendMess({ user: this.username, txt: this.msgtxt, idOrig: this.idOrig, idDest: this.idDest });
  }
}