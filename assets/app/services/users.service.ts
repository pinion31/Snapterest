
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class UsersService {
  currentUser: string;
  constructor(private http:HttpClient, private router:Router) {

  }

  getCurrentUser():string {
    return this.currentUser;
  }

  setCurrentUser(user:string):void {
    this.currentUser = user;

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
        const { username } = result.user;
        this.currentUser = username;
        this.router.navigateByUrl('/welcome');
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
}