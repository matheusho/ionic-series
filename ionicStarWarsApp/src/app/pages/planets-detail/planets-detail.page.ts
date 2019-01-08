import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.page.html',
  styleUrls: ['./planets-detail.page.scss'],
})
export class PlanetsDetailPage implements OnInit {
  planet: any;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getPlanet(id).subscribe((data: any) => this.planet = data);
  }
}
