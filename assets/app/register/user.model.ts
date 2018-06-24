export class User {
  name:string;
  email:string;
  city: string;
  state: string;
  cardsLiked: Array<string>;

  constructor(name:string, email:string, city:string, state:string) {
    this.name = name;
    this.email = email;
    this.city = city;
    this.state = state;
    this.cardsLiked = [];

  }



}