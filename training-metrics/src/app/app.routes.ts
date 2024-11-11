import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => 
      import('./dashboard/dashboard.component')
        .then(m => m.DashboardComponent),
  },
  {
    path: 'metrics',
    loadComponent: () => 
      import('./metrics/metrics.component')
        .then(m => m.MetricsComponent),
  },
  {
    path: 'programs',
    loadComponent: () => 
      import('./programs/programs.component')
        .then(m => m.ProgramsComponent),
  },
  { 
    path: 'settings',
    loadComponent: () => 
      import('./settings/settings.component')
        .then(m => m.SettingsComponent),
  },
];
