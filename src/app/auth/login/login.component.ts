import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DatastoreService} from '../../datastore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder, private router: Router, private datastoreservice: DatastoreService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.pattern('^[a-zA-Z]+$')],
      password: ['', Validators.minLength(7)],
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

    const {username, password} = this.registerForm.value;

    this.datastoreservice.user.next(this.registerForm.get('userName').value);
    this.router.navigate(['/home-page']);

  }

}
