
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { Card } from '../models/card.model';

@Injectable()
export class UsersService {
  currentUser: string;
  currentEmail: string;
  userCards = [];
  recentCards:Subject<Array> = new Subject<Array>();

  constructor(private http:HttpClient, private router:Router) {

  }

  getCurrentUser():string {
    return this.currentUser;
  }

  setCurrentUser(user:string):void {
    this.currentUser = user;

  }

  getRecentCards():Observable<Array> {
    return this.recentCards;
  }

  getUserCards():Array<Cards> {
    /*this.http
      .get('login', JSON.stringify({
        email,
        password,
      }), {*/
    return this.userCards;
  }

  loginUser(user:Object):void {
    const {email, password} = user;
    this.http
      .post('login', JSON.stringify({
        email,
        password,
      }), {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).subscribe(result => {
        console.log('result is', result);
        const { username, email, cards } = result.user;
        const cardModels = [];

        cards.map(card => {
          cardModels.push(new Card(card.title, card.imageLink, card.description));
        });

        this.currentUser = username;
        this.currentEmail = email;
        this.userCards = cardModels;
        this.router.navigateByUrl('/welcome');
      });
  }

  addNewCard(card:Object):void {
     const { title, description, imageLink } = card;
     this.http
       .post('/add-card', JSON.stringify({
          imageLink,
          title,
          owner: this.currentEmail,
          description
       }), {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }).subscribe(data => {
            const { title, description, imageLink } = data;
            this.userCards.push(new Card(title, imageLink, description));
        });
  }

  addNewUser(user:Object):void {
    const {username, password, email, state, city } = user;
    this.http
        .post('/add-user', JSON.stringify({
          username,
          password,
          state,
          city,
          email,
        }), {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }).subscribe(data => {
            const { username, email, state, city, password } = data;
            this.currentUser = username;
        });
  }

  getAllCards():void {
    this.http
      .get('/recent-cards')
      .subscribe(returnedCards => {
        const allCards:Array<Card> = [];

        returnedCards.all.map(card => {
          allCards.push(new Card(card.title, card.imageLink, card.description));
        });
        //this.recentCards =
        this.recentCards.next(allCards);
        console.log(allCards);
        console.log(this.recentCards);
      });
  }
}