import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostContainerComponent } from './containers/post-container/post-container.component';
import { PostComponent } from './components/post/post.component';
import { routing } from './post-module.routing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './post-store/post.effects';
import { reducers } from './post-store/post.reducers';

@NgModule({
  declarations: [
    PostContainerComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    routing,
    StoreModule.forFeature('postsInfo', reducers),
    EffectsModule.forFeature([PostEffects]),
  ],
  // exports: [
  //   PostContainerComponent,
  //   PostComponent
  // ]
})
export class PostModule { }
