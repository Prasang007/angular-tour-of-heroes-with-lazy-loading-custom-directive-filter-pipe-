import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroService } from './service/hero.service';
import { MessageService } from './service/message.service';
import { FilterPipe } from './filter.pipe';
import { BannerEffectDirective } from './directive/banner-effect.directive';
import { UnlessDirective } from './directive/unless.directive';
import { DynamicCompLoaderDirective } from './directive/dynamic-comp-loader.directive';
import { EditdetailsComponent } from './heroes/editdetails/editdetails.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    FilterPipe,
    BannerEffectDirective,
    UnlessDirective,
    DynamicCompLoaderDirective,
    EditdetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
  ],
  providers: [InMemoryDataService, HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
