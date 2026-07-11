import { Home, NotFound } from '@/features';
import { MainLayout } from '@/layout';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: Home,
      },
      {
        path: 'wall',
        loadComponent: () => import('@/features/wall/wall').then((m) => m.Wall),
      },
      {
        path: '**',
        component: NotFound,
      },
    ],
  },
];
