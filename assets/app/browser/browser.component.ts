import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Card } from '../models/card.model'

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {
  recentUserCards:Array<Card>;

  constructor(private usersService:UsersService) { }

  ngOnInit() {
    this.usersService.recentCards.subscribe((newcards) => {
      this.recentUserCards = newcards;
    });
    this.usersService.getAllCards();
  }

}
