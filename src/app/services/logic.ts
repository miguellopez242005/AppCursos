import { Injectable } from '@angular/core';
import { Curso } from './cursoModel';

@Injectable({
  providedIn: 'root',
})
export class Logic {
  componenteMostrar = "";
  private _cursos: Curso[] =[
    {name:"Angular",duracion: 40,nivel:"Avanzado",estado:true},
    {name:"React",duracion: 30,nivel:"Intermedio",estado:true},
    {name:"Vue",duracion: 20,nivel:"Principiante",estado:true}
    ];

  add(data: Curso) {
    this._cursos.push(data);
  }

  etsado(b:boolean,index:number){ 
    this._cursos[index].estado = b;
  }

  get cursos() {
    return this._cursos;
  }
  
  ruta(c:string){
    this.componenteMostrar = c;
  }

  delete(index: number) {
    this._cursos.splice(index, 1);
  }

}
