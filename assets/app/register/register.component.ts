import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
    })
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('form', this.registerForm);
    } else {
      console.log('invalid form');
    }

  }
}
