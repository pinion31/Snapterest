
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UsersService {
  currentUser: string;

  constructor(private http:HttpClient) {

  }

  getCurrentUser():string {
    return this.currentUser;
  }

  setCurrentUser(user:string):void {
    this.currentUser = user;

  }

  addNewUser(user:Object):void {
    const {username, email, state, city } = user;
    this.http
        .post('/add-user', JSON.stringify({
          username,
          state,
          city,
          email,
        }), {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }
        ).subscribe(data => {
            const { username, email, state, city } = data;
            this.currentUser = username;
        });
  }
}