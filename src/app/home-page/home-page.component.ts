import { Component, OnInit } from '@angular/core';
import {DatastoreService} from '../datastore.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  logged = false;
  user: string;

  constructor(private datapassservice: DatastoreService) {
    this.datapassservice.currentUser$.subscribe((data) => {
      this.user = data;
      if (this.user !== 'anonymous') {
        this.logged = true;
      }

    });

  }

}
