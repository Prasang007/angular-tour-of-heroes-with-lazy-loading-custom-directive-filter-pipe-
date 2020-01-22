import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  boi= new Hero();
  searchText= '';
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = [];
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  updateHero(hero:Hero){
    this.heroes.forEach(element => {
      if(element.name === hero.name ){
        element.name = hero.name
      }    
    })
  }
}
