import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.page.html',
  styleUrls: ['./people-detail.page.scss'],
})
export class PeopleDetailPage implements OnInit {
  person: any;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getPerson(id).subscribe((data: any) => this.person = data);
  }

}
