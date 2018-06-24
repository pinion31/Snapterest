import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;

  constructor(private usersService:UsersService, private router:Router) { }

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
    } else {
      console.log('invalid form');
    }

  }

  backToLogin() {
    this.router.navigateByUrl('/');
  }
}
