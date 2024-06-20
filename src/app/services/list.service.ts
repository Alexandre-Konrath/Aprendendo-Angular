import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';
import { Services } from '../interfaces/Services';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrlAnimals = 'http://localhost:3000/animals'
  private apiUrlServices = 'http://localhost:3000/servicos'

  constructor(private http: HttpClient) { }

  remove(id: number) {
    return this.http.delete<Animal>(`${this.apiUrlAnimals}/${id}`)
  }

  getAnimal(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrlAnimals)
  }

  getServices(): Observable<Services[]> {
    return this.http.get<Services[]>(this.apiUrlServices)
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrlAnimals}/${id}`);
  }
}
