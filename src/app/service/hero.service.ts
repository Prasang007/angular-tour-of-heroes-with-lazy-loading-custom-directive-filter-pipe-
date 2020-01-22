import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { user } from '../user';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  loggedIn= false;
  private heroesUrl = 'api/heroes';  // URL to web api
  // private logUrl ='api/login';
  public logUrl ='api/login';
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Sending Heroes ');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url);
  }
  checkUser(logger:string,pwd:string): Observable<user[]>{
    console.log(logger);
    const params = new HttpParams()
    .set('name',logger)
    .set('pwd',pwd)
    
    return this.http.get<user[]>(this.logUrl,{params})
  }
}
