export class Card {
  title:string;
  imageLink:string;
  description: string;
  likes: number;
  id:string;
  isPublic: boolean;

  constructor(title:string, imageLink:string, description:string, likes:number, id:string, isPublic:boolean=false) {
    this.title = title;
    this.imageLink = imageLink;
    this.description = description;
    this.likes = likes;
    this.id = id;
    this.isPublic = isPublic;
  }
}