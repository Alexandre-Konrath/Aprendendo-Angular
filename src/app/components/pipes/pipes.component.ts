import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  someTitle = "TEXTO COM ESTILO DE TITILO"

  today = new Date()
}