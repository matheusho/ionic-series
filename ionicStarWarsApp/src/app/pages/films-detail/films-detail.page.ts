import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.page.html',
  styleUrls: ['./films-detail.page.scss'],
})
export class FilmsDetailPage implements OnInit {
  film: any;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getFilm(id).subscribe((data: any) => this.film = data);
  }

}
