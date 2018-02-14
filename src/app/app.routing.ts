import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { MainComponent, HomeComponent, AboutComponent } from './';

const routes: Route[] = [
  { path: 'error', loadChildren: 'app/error-pages/error-pages.module#ErrorPagesModule' },
  {
    path: '', component: MainComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'error/404' }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);