import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss'
})
export class FirstComponentComponent {
  nome: string = 'Alexandre';
  idade: number = 20;
  hobbie = ['correr', 'jogar', 'estudar']
  car = {
    nome: 'clio',
    ano: 2003
  }
}
