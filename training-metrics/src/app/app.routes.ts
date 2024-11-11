import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetricsComponent } from './metrics/metrics.component';
import { ProgramsComponent } from './programs/programs.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'metrics',
    component: MetricsComponent,
  },
  {
    path: 'programs',
    component: ProgramsComponent,
  },
  { 
    path: 'settings',
    component: SettingsComponent,
  },
];
