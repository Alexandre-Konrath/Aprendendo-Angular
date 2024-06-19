import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from '../../interfaces/Animal';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss'
})
export class ItemDetailsComponent implements OnInit {
  animal?: Animal

  constructor(private listServices: ListService, private route: ActivatedRoute) {
    this.getAnimal()
  }

  ngOnInit(): void { }

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.listServices.getItem(id).subscribe((animal) => (this.animal = animal))
  }
}
