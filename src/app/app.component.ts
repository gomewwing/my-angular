import { HeroesService } from './heroes.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes;
  constructor( hero: HeroesService) {
    this.heroes = hero.Hero;
  }
}
