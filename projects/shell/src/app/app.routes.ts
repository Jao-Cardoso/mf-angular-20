import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '', component: Home 
  },
  {
    path: 'firstMf',
    loadComponent: () =>
      loadRemoteModule('firstMf', './Component').then((m) => m.App),
  },
  {
    path: 'secondMf',
    loadComponent: () =>
      loadRemoteModule('secondMf', './Component').then((m) => m.App),
  },
  {
    path: '**',
    component: Home,
  }
];
