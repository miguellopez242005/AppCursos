import { Component } from '@angular/core';
import { Logic } from '../../services/logic';
import{ Curso } from '../../services/cursoModel';
@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.html',
  styleUrl: './formulario.scss',
})
export class Formulario {
  text: Curso = { name: '', duracion: null, nivel: '', estado: false };

  constructor(private logic: Logic) {}

  addText() {
    if (this.text.name.trim() === '' || this.text.duracion === null || this.text.nivel.trim() === '') {
      alert('Por favor, ingrese datos válidos para el curso.');
      return;
    }
    this.logic.add(this.text);
    this.text = { name: '', duracion: null, nivel: '', estado: false };
  }
}
