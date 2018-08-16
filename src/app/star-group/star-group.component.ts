import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-star-group',
  templateUrl: './star-group.component.html',
  styleUrls: ['./star-group.component.css']
})
export class StarGroupComponent implements OnInit {
  stars: Array<any> =[];
  hasCreatedStars: boolean = false;
  starStyles:Array<any> =[];
  @Input() renderCount;

  constructor(private usersService: UsersService) {
    this.stars.length = 1;
    this.starStyles.length = 1;
  }

  ngOnInit() {
  }

   getRandomStar() {
   // if (this.usersService.getStars() < 1) {
      this.hasCreatedStars = true;
      this.usersService.addStars();

      const star = {
        position: 'absolute',
        width: (Math.floor(Math.random() * 20) + 10) + 'px',
        left : Math.floor(Math.random() * 100) + '%',
        top : Math.floor(Math.random() * 70) + '%',
        'animation-name': 'sparkle',
        'animation-iteration-count': 'infinite',
        'animation-duration': '1s',
        'animation-delay': (Math.random() * 1) + 's',
      };
      this.starStyles.push(star);
      return star;
   // }
  }
}
