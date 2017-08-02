import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { AccountComponent }  from './account.component';
import { MovementComponent }  from './movement.component';

import { StorageService }  from './storage.service';

const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'account',
    component: AccountComponent,
    data: { title: 'Account List' }
  },
  {
    path: 'movement',
    component: MovementComponent,
    data: { title: 'Movement List' }
  },
  {
    path: '',
    redirectTo: '/account',
    pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, AccountComponent, MovementComponent ],
  providers:    [ StorageService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
