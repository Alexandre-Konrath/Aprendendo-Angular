import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  userName = 'Alexandre'
  userData = {
    email: 'delimakonrath@gmail.com',
    fone: '(12) 34 5678910'
  }

}
