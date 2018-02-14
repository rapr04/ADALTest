import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { MainComponent, HomeComponent, AboutComponent } from './';

const routes: Route[] = [
  {
    path: '', component: MainComponent, children: [
      { path: '', component: HomeComponent },    
      { path: 'about', component: AboutComponent },     
    ]
  }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);