import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AllHeroesComponent} from "./all-heroes/all-heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailsComponent} from "./hero-details/hero-details.component";

const routes: Routes = [
  {path : 'heroes', component : AllHeroesComponent},
  {path : 'dashboard', component: DashboardComponent},
  {path: '', redirectTo : 'dashboard', pathMatch: "full"},
  {path: 'details/:id', component: HeroDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
