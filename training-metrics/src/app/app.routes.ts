import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'library',
    children: [
      {
        path: 'exercises',
        loadComponent: () =>
          import('./pages/library/exercises/exercises.component').then(
            (m) => m.ExercisesComponent
          ),
      },
      {
        path: 'tags',
        loadComponent: () =>
          import('./pages/library/tags/tags.component').then(
            (m) => m.TagsComponent
          ),
      },
    ],
  },
  {
    path: 'metrics',
    loadComponent: () =>
      import('./pages/metrics/metrics.component').then((m) => m.MetricsComponent),
  },
  {
    path: 'programs',
    loadComponent: () =>
      import('./pages/programs/programs.component').then((m) => m.ProgramsComponent),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.component').then((m) => m.SettingsComponent),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
