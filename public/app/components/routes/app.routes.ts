import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from '../../components/home/home.components';
import { AltComponent } from '../../components/alt/alt.components';


export const routes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'alt',
    component: AltComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
