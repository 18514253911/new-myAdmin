import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import {BaSidebar} from './left/app.leftcomponent';
import {BaPageTop} from './banner/app.bannercomponent';
import {BaMenu} from './left/baMenu/bamenu.component';
import {BaMenuItem} from './left/baMenu/baMenuItem/bamenuitem.component';
import appRoutes  from './app.routing';
import { HomeComponent }  from './home/home.component';
import { GameComponent }  from './game/game.component';
@NgModule({
  imports:      [ BrowserModule,RouterModule,appRoutes ],
  declarations: [ AppComponent,BaPageTop,BaSidebar,BaMenu,BaMenuItem,HomeComponent,GameComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
