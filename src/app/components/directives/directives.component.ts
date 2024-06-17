import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  font = 'Arial';
  size = 1;
  color = 'red';

  classes = ['green-title', 'small-title'];
  underline = ['underline']


}
