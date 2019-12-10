import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  user = new BehaviorSubject('anonymous');
  currentUser$: Observable<string>;

  constructor() {
    this.currentUser$ = this.user.asObservable();
  }

}
