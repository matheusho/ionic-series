import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.page.html',
  styleUrls: ['./films-detail.page.scss'],
})
export class FilmsDetailPage implements OnInit {
  filmId: string;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
