import { Routes } from '@angular/router';
import { MainLayout } from '@/layout';
import { Home } from '@/features';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home,
      },
    ],
  },
];
