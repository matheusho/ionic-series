import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.page.html',
  styleUrls: ['./films-detail.page.scss'],
})
export class FilmsDetailPage implements OnInit {
  film: any;
  id: string;
  isFavorite = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private emailComposer: EmailComposer,
    private favoriteService: FavoriteService
  ) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getFilm(this.id).subscribe((data: any) => this.film = data);

    this.favoriteService.isFavorite(this.id).then(isFavorite => this.isFavorite = isFavorite);
  }

  favoriteFilm() {
    this.favoriteService.favoriteFilm(this.id).then(() => this.isFavorite = true);
  }

  unfavoriteFilm() {
    this.favoriteService.unfavoriteFilm(this.id).then(() => this.isFavorite = false);
  }

  shareFilm() {
    const { title,
      opening_crawl } = this.film;

    let email = {
      to: 'oliveira.matheusde@gmail.com',
      subject: `I love his one ${title}`,
      body: `Can you remember the opening?<br><br>\\${opening_crawl}\\`
    };

    this.emailComposer.open(email);
  }
}
