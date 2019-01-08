import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  films: Observable<any>;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.films = this.apiService.getFilms();
  }

  openDetails(film: any) {
    const split = film.url.split('/');
    const id = split[split.length - 2];

    this.router.navigateByUrl(`/tabs/films/${id}`);
  }
}
