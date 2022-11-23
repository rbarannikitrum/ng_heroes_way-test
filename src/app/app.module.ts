import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { AllHeroesComponent } from './all-heroes/all-heroes.component';
import {FormsModule} from "@angular/forms";
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AllHeroesComponent,
    HeroDetailsComponent,
    MessagesComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
