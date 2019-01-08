import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://swapi.co/api';

  constructor(public http: HttpClient) { }

  getFilms() {
    return this.http.get(`${this.url}/films/`);
  }

  getFilm(id: string) {
    return this.http.get(`${this.url}/films/${id}/`);
  }

  getPeople() {
    return this.http.get(`${this.url}/people/`);
  }

  getPerson(id: string) {
    return this.http.get(`${this.url}/people/${id}/`);
  }

  getPlanets() {
    return this.http.get(`${this.url}/planets/`);
  }

  getPlanet(id: string) {
    return this.http.get(`${this.url}/planets/${id}/`);
  }

}
