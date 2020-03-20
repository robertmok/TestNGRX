import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/usersInfo', pathMatch: 'full' },
  { path: 'usersInfo', component: UserComponent },
  { path: 'postsInfo', loadChildren: () => import('./post-module/post-module.module').then(m => m.PostModule) },
  { path: 'sample', loadChildren: () => import('./sample/sample.module').then(m => m.SampleModule) },
  { path: '**', redirectTo: 'usersInfo' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
