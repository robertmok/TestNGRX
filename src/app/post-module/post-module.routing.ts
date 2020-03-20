import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PostContainerComponent } from './containers/post-container/post-container.component';

export const routes: Routes = [
  { path: 'all', component: PostContainerComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
