import {Component, OnChanges} from '@angular/core';
import {DatastoreService} from '../../shared/service/datastore.service';
import {first} from 'rxjs/operators';
import {ImageService} from '../../shared/service/image.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnChanges {

  visibleImages: any[] = [];
  logged = false;
  user: string;

  countries = ['Casablanca', 'Cuba', 'Mexico', 'Bahamas', 'Jamaica', 'Maldives'];
  sales = ' Black Friday sales! hurry up! ';

  constructor(private datapassservice: DatastoreService, private imageService: ImageService) {
    this.datapassservice.currentUser$.subscribe((data) => {
      this.user = data;
      if (this.user !== 'anonymous') {
        this.logged = true;
      }
    });
    this.visibleImages = this.imageService.getImages();
  }

    ngOnChanges() {
      this.visibleImages = this.imageService.getImages();
    }
  }
