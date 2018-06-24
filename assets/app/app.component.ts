import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  stars: Array<any> =[];
  hasCreatedStars: boolean = false;

  ngOnInit() {
    if (!this.hasCreatedStars) {
      for (let i=0;i<30;i++) {
        const randomX = Math.floor(Math.random() * 500) + 'px';
        this.stars.push([randomX]);
      }
      this.hasCreatedStars = true;
    }
  }

  getRandomStar() {
    return {
      position: 'absolute',
      width: (Math.floor(Math.random() * 20) + 10) + 'px',
      left : Math.floor(Math.random() * 100) + '%',
      top : Math.floor(Math.random() * 70) + '%',
      'animation-name': 'sparkle',
      'animation-iteration-count': 'infinite',
      'animation-duration': '1s',
      'animation-delay': (Math.random() * 1) + 's',
    };
  }
}
