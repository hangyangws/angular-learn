import { Component, OnInit } from '@angular/core';

import { Hero } from "../hero";
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private heroService: HeroService
  ) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heros => this.heroes = heros);
  }

  ngOnInit() {
    this.getHeroes();
  }
}
