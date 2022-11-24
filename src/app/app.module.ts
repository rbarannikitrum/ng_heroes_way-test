import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeroComponent} from './hero/hero.component';
import {AllHeroesComponent} from './all-heroes/all-heroes.component';
import {FormsModule} from "@angular/forms";
import {HeroDetailsComponent} from './hero-details/hero-details.component';
import {MessagesComponent} from './messages/messages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {MemoryDataService} from "./memory-data.service";
import { SearchHeroComponent } from './search-hero/search-hero.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AllHeroesComponent,
    HeroDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    SearchHeroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MemoryDataService, {dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
