import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DatastoreService} from '../../../shared/service/datastore.service';
import {AuthService} from '../../../shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder, private router: Router,
               private datastoreservice: DatastoreService, private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]],
    }, {
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    const credentials = this.registerForm.value;
    console.log(credentials);
    this.authService.login(credentials).subscribe(
      result => {
        console.log(result.token);
        console.log(result.message);
        this.authService.token = result.token;
        this.router.navigate(['/home-page']);
      },
      error => {
        // handle error
      }
    );

    this.datastoreservice.user.next(this.registerForm.get('email').value);
    // this.router.navigate(['/home-page']);

  }

}
