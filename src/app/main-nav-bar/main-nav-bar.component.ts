import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.css']
})
export class MainNavBarComponent implements OnInit {
  loggedIn:Boolean;

  constructor(private usersService:UsersService) { }

  ngOnInit() {
    this.usersService.loggedIn.subscribe(value => {
      this.loggedIn = value;
    });
  }

  logOut() {
    this.usersService.logOut();
  }
}
