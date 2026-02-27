import { Component } from '@angular/core';
import { Logic } from "../../services/logic";

@Component({
  selector: 'app-listar',
  standalone: false,
  templateUrl: './listar.html',
  styleUrl: './listar.scss',
})
export class Listar {

  constructor(public logic: Logic) {}

  get cursos() {
    return this.logic.cursos;
  }

  eliminarCurso(index: number) {
    this.logic.delete(index);
  }
  
  estadoCurso(index: number) {
    this.logic.etsado(!this.logic.cursos[index].estado,index);
  }
}
