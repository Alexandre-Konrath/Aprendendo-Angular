import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chage-number',
  templateUrl: './chage-number.component.html',
  styleUrl: './chage-number.component.scss'
})
export class ChageNumberComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()

  handleClick() {
    this.changeNumber.emit()
  }
}
