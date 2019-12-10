import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ImageService} from './image.service';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageresolverService implements Resolve<any> {
  constructor(private service: ImageService, private route: ActivatedRoute) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    console.log('working');
    return this.service.getImage(this.route.snapshot.params['id']);
  }
}
