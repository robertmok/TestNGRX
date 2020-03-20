import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ParentComponent } from './containers/index';

export const routes: Routes = [
  { path: 'all', component: ParentComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
