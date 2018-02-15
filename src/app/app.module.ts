import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ Router, RouterModule} from '@angular/router';
import{Http,  HttpModule} from '@angular/http';
import{Adal4Service, Adal4HTTPService} from 'adal-angular4';

import * as c from './'
import { AppRoutes } from './app.routing';
import { AuthenticationGuard } from './common/gurads/authentication.guard';


@NgModule({
  declarations: [
    c.AppComponent,
    c.MainComponent,
    c.HomeComponent,
    c.AboutComponent,
    c.LoginComponent,
    c.LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutes
  ],
  providers: [
    Adal4Service,
    {
      provide:Adal4HTTPService,
      useFactory:Adal4HTTPService.factory,
      deps:[Http,Adal4Service]
    }, 
    AuthenticationGuard
  ],
  bootstrap: [c.AppComponent]
})
export class AppModule { }
