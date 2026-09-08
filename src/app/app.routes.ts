import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';

export const routes: Routes = [
  {
    path: '',
    component: Landing,
    title: 'Home Expand — Smart Furniture & Home Décor',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
