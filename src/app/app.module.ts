import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ Router, RouterModule} from '@angular/router'

import * as c from './'
import { AppRoutes } from './app.routing';


@NgModule({
  declarations: [
    c.AppComponent,
    c.MainComponent,
    c.HomeComponent,
    c.AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [c.AppComponent]
})
export class AppModule { }
