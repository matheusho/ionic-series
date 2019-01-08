import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {
  planets: Observable<any>;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.planets = this.apiService.getPlanets();
  }

  openDetails(planet: any) {
    const split = planet.url.split('/');
    const id = split[split.length -2 ];

    this.router.navigateByUrl(`/tabs/planets/${id}`);
  }
}
