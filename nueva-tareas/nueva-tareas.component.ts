import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/modelos/tarea';
import { TareasService } from '../servicios/tareas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-tareas',
  templateUrl: './nueva-tareas.component.html',
  styleUrls: ['./nueva-tareas.component.scss']
})
export class NuevaTareasComponent implements OnInit {

  nuevaTarea = new Tarea(0, null, 0, 0);

  constructor(private _tarServ: TareasService, private _router: Router) { }

  ngOnInit() {

  }
  guardarTarea() {
    console.log('Nueva:', this.nuevaTarea);
    // this._tarServ.addTarea(this.nuevaTarea);
    this._tarServ.addTareaToAPI(this.nuevaTarea).subscribe(unaTarea => {
      console.log('respuesta post:', unaTarea);
      this._router.navigate(['/tareas']);
      //redirigir a lista Tarea
    });
  }
}
