import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Card } from '../models/card.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {
  recentUserCards:Array<Card>;

  constructor(private usersService:UsersService, private http:HttpClient) { }

  ngOnInit() {
    this.usersService.recentCards.subscribe((newcards) => {
      //this.recentUserCards = newcards;
    });
    this.usersService.getAllCards();
  }

  getLikes(id) {
    console.log('this.usersService.likedCards', this.usersService.likedCards);
    return this.usersService.likedCards.includes(id);
  }

  likeSnapCard(id, index) {
    this.http
      .post('like-snapcard', JSON.stringify({
        id,
        email: this.usersService.currentEmail,
      }), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
      }).subscribe(data => {
        if (data) {
         // this.recentUserCards[index].likes = data.card.likes; //temp
          this.usersService.likeCard(id);
        }

      });
  }

}
