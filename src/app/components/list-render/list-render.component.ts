import { Component } from '@angular/core';
import { Animal } from '../../interfaces/Animal';
import { Services } from '../../interfaces/Services';
import { ListService } from '../../services/list.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss'
})
export class ListRenderComponent {

  animals: Animal[] = []
  services: Services[] = [];
  animalDetails = ''

  constructor(private listService: ListService) {
    this.getAnimals()
    this.getServices()
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} e tem ${animal.age} anos`
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => animal.name !== a.name)
    this.listService.remove(animal.id).subscribe()
  }

  getAnimals(): void {
    this.listService.getAnimal().subscribe((animals) => this.animals = animals)
    catchError(error => {
      console.error('Erro ao buscar animals, liga o servidor burro...', error)
      return of([])
    })
  }
  getServices(): void {
    this.listService.getServices().subscribe((services) => this.services = services)
    catchError(error => {
      console.error('Erro ao buscar serviços, liga o servidor burro...', error)
      return of([])
    })
  }
}
