export class Card {
  title:string;
  imageLink:string;
  description: string;

  constructor(title:string, imageLink:string, description:string) {
    this.title = title;
    this.imageLink = imageLink;
    this.description = description;
  }
}