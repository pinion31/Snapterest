
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Card } from '../models/card.model';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
  currentUser: string;
  currentEmail: string;
  errorMessage = {error:''};
  loggedIn:Subject<boolean> = new Subject<boolean>();
  userCards:Array<Card> = [];
  likedCards:Array<string> = [];
  recentCards:Subject<Array<any>> = new Subject<Array<any>>();
  stars = 0;

  constructor(private http:HttpClient, private router:Router) {

  }

  getErrorMessage():Object {
    return this.errorMessage;
  }

  getCurrentUser():string {
    return this.currentUser;
  }

  setCurrentUser(user:string):void {
    this.currentUser = user;

  }

  getRecentCards():Observable<Array<String>> {
    return this.recentCards;
  }

  getStars() {
    return this.stars;
  }

  addStars() {
    this.stars = this.stars + 1;
  }

  logOut() {
    this.loggedIn.next(false);
    this.router.navigateByUrl('/');
  }
  getUserCards():Array<Card> {
    return this.userCards;
  }

  loginUser(user):void {
    const {email, password} = user;
    this.http
      .post('login', JSON.stringify({
        username: email,
        password,
      }), {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).subscribe((result:any) => {
        if (result.user) {
          const { token } = result;
          const { username, email, cards, cardsLiked } = result.user;
          const cardModels = [];

          cards.map(card => {
            cardModels.push(new Card(card.title, card.imagelink, card.description, card.likes, card.id, card.isPublic));
          });

          localStorage.setItem('token', token); // JWT token
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

  addNewCard(card):void {
     const { title, description, imageLink } = card;
     const token = localStorage.getItem('token');
     this.http
       .post('/add-card', JSON.stringify({
          imageLink,
          title,
          owner: this.currentEmail,
          description
       }), {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'x-access-token': token
          })
        }).subscribe((data:any) => {
            const { title, description, imageLink, id } = data;
            this.userCards.push(new Card(title, imageLink, description, 0, id));
        });
  }

  likeCard(id:string):void {
    this.likedCards.push(id);
  }

  addNewUser(user:any):void {
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
            'Content-Type': 'application/json',
          })
        }).subscribe((data:any) => {
            const { username, email, state, city, password, token } = data;
            localStorage.setItem('token', token); // JWT token
            this.currentUser = username;
        });
  }

  // get recent cards from all users
  getAllCards():void {
    const token = localStorage.getItem('token');
    this.http
      .get(`/recent-cards/${this.currentEmail}`, {
        headers: new HttpHeaders({
          'x-access-token': token })
      }).subscribe((returnedCards:any) => {
        const allCards:Array<Card> = [];

        returnedCards.all.map(card => {
          allCards.push(new Card(card.title, card.imagelink, card.description, card.likes, card.id, card.ispublic));
        });
        this.recentCards.next(allCards);
      });
  }

  toggleCardPublic(id:string) {
    const token = localStorage.getItem('token');

    this.http
      .post('/toggle-card-public', JSON.stringify({
          id
        }), {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'x-access-token': token
          })
        }).subscribe((data:any) => {
            const { isPublic } = data;
            console.log('this.recentCards', this.recentCards);
            console.log('typeof this.recentCards', typeof this.recentCards);
            /*
            const updatedCards = this.recentCards.map(card => {
              if (card.is === id) {
                card.isPublic = isPublic;
              }
            });
            this.recentCards = updatedCards;*/
        });
  }
}