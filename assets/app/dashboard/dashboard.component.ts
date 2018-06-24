import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: string;
  currentUserCards: Array<Card>;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.currentUser = this.usersService.getCurrentUser();
    this.currentUserCards = this.usersService.getUserCards();
    //this.usersService.getAllCards();
  }

  setPublic(id:string, index: number) {
    this.usersService.toggleCardPublic(id);
    this.currentUserCards[index].isPublic = !this.currentUserCards[index].isPublic;
    console.log('ispub', this.currentUserCards[index].isPublic);
  }
}
