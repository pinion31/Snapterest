import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;

  constructor(private usersService:UsersService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
    })
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.usersService.addNewUser(this.registerForm.value);

      //console.log('form', this.usersService.getCurrentUser());
    } else {
      console.log('invalid form');
    }

  }
}
