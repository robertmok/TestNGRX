import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '../../../root-store/app.reducers';
import * as fromPost from '../../post-store/post.reducers';
// import { GetPosts } from '../store/actions/post.actions';
import { getPosts } from '../../post-store/post.actions';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss'],
  // child components of this container will still have default change detection but will not be checked because parent component is onPush
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostContainerComponent implements OnInit {
  posts$ = this.store.pipe(select(fromPost.selectPostList));
  error$ = this.store.pipe(select(fromPost.selectPostListError));

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {

  }

  loadPosts() {
    console.log('load posts ...');
    // this.store.dispatch(new GetPosts()); // ngrx v6
    this.store.dispatch(getPosts()); // ngrx v8
  }

  viewComments(postId) {
    console.log('View Comments for: ' + postId);
  }

}
