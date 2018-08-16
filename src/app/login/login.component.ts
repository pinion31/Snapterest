import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  errorMessage:Object;

  constructor(private userService:UsersService, private zone: NgZone) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {
    this.errorMessage = this.userService.getErrorMessage();
  }

  onSubmit() {
    this.userService.loginUser(this.loginForm.value);
  }
}
