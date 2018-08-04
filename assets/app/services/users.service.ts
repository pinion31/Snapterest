
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { Card } from '../models/card.model';

@Injectable()
export class UsersService {
  currentUser: string;
  currentEmail: string;
  errorMessage:Object<any> = {error:''},
  loggedIn:Subject<boolean> = new Subject<boolean>();
  userCards:Array<Card> = [];
  likedCards:Array<string> = [];
  recentCards:Subject<Array> = new Subject<Array>();
  stars:Number = 0;

  constructor(private http:HttpClient, private router:Router) {

  }

  getErrorMessage():Object {
    return this.errorMessage;
  }

  getCurrentUser():string {
    console.log('this currentuser', this.currentUser));
    return this.currentUser;
  }

  setCurrentUser(user:string):void {
    this.currentUser = user;

  }

  getRecentCards():Observable<Array> {
    return this.recentCards;
  }

  getStars() {
    return this.stars;
  }

  addStars() {
    this.stars++;
  }

  logOut() {
    this.loggedIn.next(false);
    this.router.navigateByUrl('/');
  }
  getUserCards():Array<Card> {
    return this.userCards;
  }

  loginUser(user:Object):void {
    const {email, password} = user;
    this.http
      .post('login', JSON.stringify({
        username: email,
        password,
      }), {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).subscribe(result => {
        if (result.user) {
          const { username, email, cards, cardsLiked } = result.user;
          const cardModels = [];

          cards.map(card => {
            cardModels.push(new Card(card.title, card.imagelink, card.description, card.likes, card.id, card.isPublic));
          });

          this.loggedIn.next(true);
          this.currentUser = username;
          this.currentEmail = email;
          this.userCards = cardModels;
          this.likedCards = cardsLiked || [];
          this.router.navigateByUrl('/welcome');
        } else {
          //invalid username or password
          this.errorMessage.error = result.error;
        }
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
            const { title, description, imageLink, id } = data;
            this.userCards.push(new Card(title, imageLink, description, 0, id));
        });
  }

  likeCard(id:string):void {
    this.likedCards.push(id);
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

  // get recent cards from all users
  getAllCards():void {
    this.http
      .get(`/recent-cards/${this.currentEmail}`)
      .subscribe(returnedCards => {
        const allCards:Array<Card> = [];

        returnedCards.all.map(card => {
          allCards.push(new Card(card.title, card.imagelink, card.description, card.likes, card.id, card.ispublic));
        });
        this.recentCards.next(allCards);
      });
  }

  toggleCardPublic(id:string) {
    this.http
      .post('/toggle-card-public', JSON.stringify({
          id
        }), {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }).subscribe(data => {
            const { isPublic } = data;
            const updatedCards = this.recentCards.map(card => {
              if (card.is === id) {
                card.isPublic = isPublic;
              }
            });
            this.recentCards = updatedCards;
        });
  }
}