import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent implements OnInit {

  @Input() a: Hero;
  @Output() anEvent = new EventEmitter<Hero>();
  
  constructor() { }

  ngOnInit() {
  }
  emitVal(hero: HTMLInputElement){
    this.a.name = hero.value;
    this.anEvent.emit(this.a)
  } 

  
}
