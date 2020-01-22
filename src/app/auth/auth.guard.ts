import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HeroService } from '../service/hero.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private heroService:HeroService,private router:Router
    ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.heroService.loggedIn){
      return true;
    }
    else {
      
      this.router.navigate(['/login'])
      return false;
    }
  }
  
}
