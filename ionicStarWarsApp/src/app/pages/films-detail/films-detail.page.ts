import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.page.html',
  styleUrls: ['./films-detail.page.scss'],
})
export class FilmsDetailPage implements OnInit {
  film: any;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private emailComposer: EmailComposer) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getFilm(id).subscribe((data: any) => this.film = data);
  }

  shareFilm() {
    const { title, opening_crawl } = this.film;

    let email = {
      to: 'oliveira.matheusde@gmail.com',
      subject: `I love his one ${title}`,
      body: `Can you remember the opening?<br><br>\\${opening_crawl}\\`
    };

    this.emailComposer.open(email);
  }
}
