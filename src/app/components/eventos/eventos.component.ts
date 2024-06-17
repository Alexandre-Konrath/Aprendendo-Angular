import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent {
  show: boolean = true

  showMessage(): void {
    // evento de toggle
    this.show = !this.show
  }

  inputValue: string = '';
  inputInicialValue: string = 'Valor do input'

  capturarInput(event: any): void {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
  }

  enviarMensagem(): void {
    this.inputInicialValue = this.inputValue
    setTimeout(() => {
      this.inputValue = ''
    }, 500)
  }
}
