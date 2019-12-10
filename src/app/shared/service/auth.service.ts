import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  get token(): string {
    return localStorage.getItem('Token');
  }

  set token(token: string) {
    localStorage.setItem('Token', token);
  }

  get star(): string {
    return localStorage.getItem('Star');
  }

  set star(count: string) {
    localStorage.setItem('Star', count);
  }
  constructor(private http: HttpClient) {
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>('https://p0jtvgfrj3.execute-api.eu-central-1.amazonaws.com/test/authenticate',
      JSON.stringify(credentials));
  }

}
