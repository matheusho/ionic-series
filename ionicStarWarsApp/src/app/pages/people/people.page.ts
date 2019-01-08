import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  people: Observable<any>;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.people = this.apiService.getPeople();
  }

  openDetails(person: any) {
    const split = person.url.split('/');
    const id = split[split.length - 2];

    this.router.navigateByUrl(`/tabs/people/${id}`);
  }
}
