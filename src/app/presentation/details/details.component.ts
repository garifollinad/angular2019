import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../../shared/service/image.service';
import {ActivatedRoute} from '@angular/router';
import {StarRatingComponent} from "ng-starrating";
import {AuthService} from "../../shared/service/auth.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  image: any;
  showComment = false;
  comments = [];
  stars = [];
  changedComment = '';
  changedStar = '';
  hasComments = false;
  faRate = 1;
  cssRate = 1;
  @Input() rate;

  constructor(private imageService: ImageService, private route: ActivatedRoute, private authService: AuthService) { }
  ngOnInit() {
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    );
    let id = this.route.snapshot.params['id'];
    if (localStorage.getItem('comments' + id) === null) {
      this.hasComments = false;
    } else {
      let retrievedData = localStorage.getItem('comments' + id);
      let retrievedComments = JSON.parse(retrievedData) as Array<string>;
      this.comments = retrievedComments;
      this.hasComments = true;
    }
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent}) {
    localStorage.setItem('star', $event.newValue.toString());
    this.changedStar = event.target.value;
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  onCommentChange(event) {
    this.changedComment = event.target.value;

  }

  onStarChange(event) {
    this.changedStar = event.target.value;

  }

  changeStars() {
    let id = this.route.snapshot.params['id'];
    if (localStorage.getItem('stars' + id) === null) {
      let stars = [];
      stars.push(this.changedStar);
      this.stars = stars;
      localStorage.setItem('stars' + id, localStorage.getItem('star'));
    } else {
      let retrievedData = localStorage.getItem('stars' + id);
      let retrievedComments = JSON.parse(retrievedData) as Array<string>;
      localStorage.removeItem('stars' + id);
      retrievedComments.push(this.changedStar);
      localStorage.setItem('stars' + id, localStorage.getItem('star'));
      this.stars = retrievedComments;
    }
  }

  changeComment() {
    this.hasComments = true;
    let id = this.route.snapshot.params['id'];
    if (localStorage.getItem('comments' + id) === null) {
      let comments = [];
      comments.push(this.changedComment);
      this.comments = comments;
      localStorage.setItem('comments' + id, JSON.stringify(comments));
    } else {
      let retrievedData = localStorage.getItem('comments' + id);
      let retrievedComments = JSON.parse(retrievedData) as Array<string>;
      localStorage.removeItem('comments' + id);
      retrievedComments.push(this.changedComment);
      localStorage.setItem('comments' + id, JSON.stringify(retrievedComments));
      this.comments = retrievedComments;
    }
  }

}
