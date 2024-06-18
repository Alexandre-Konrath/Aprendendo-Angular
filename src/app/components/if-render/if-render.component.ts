import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.scss'
})
export class IfRenderComponent {
  // se mudar para false ele para de exibir e exibe uma mensagem
  candShow: boolean = true;
  name = 'Alexandre'
}
