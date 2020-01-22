import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../service/hero.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidUser = false;
  login={
    id:null,
    name:'',
    pwd:''
  }
  on = false;

  constructor(private router:Router,
    private heroService:HeroService,
    ) { }

  ngOnInit() {
  }
  
  submit(form:NgForm){
    
    this.heroService.checkUser(form.value.name,form.value.pwd).subscribe(
      user  => {
        console.log(user.length);
        console.log(user);
        
        if(user.length){
          this.heroService.loggedIn = true;
          this.router.navigate(['/dashboard'],{state:form.value});
        } else {
            this.invalidUser =true;
        }
      }
    ),(err)=>{
      console.log(err)
    }
  }

}
