import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.scss'
})
export class ParentDataComponent {
  //! iniciar o dado com vazio
  @Input() name: string = ''
  //! inciar o dado assim !
  @Input() userData!: { email: string; fone: string }
}
