import { Injectable } from '@angular/core';
import { Effect, ofType, Actions, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of, EMPTY } from 'rxjs';
import { switchMap, map, withLatestFrom, tap, catchError } from 'rxjs/operators';
import * as fromRoot from '../../root-store/app.reducers';
// import {
//   GetPostsSuccess,
//   GetPostsError,
//   EPostActions,
// //   GetCommentsSuccess,
// //   GetComments,
//   GetPosts
// } from '../actions/post.actions';
import { UserService } from '../../services/user.service';
import * as fromPost from '../post-store/post.reducers';
import { getPosts, getPostsSuccess, getPostsError } from './post.actions';

@Injectable()
export class PostEffects {
/*
  // ngrx v6
//   @Effect()
//   getComments$ = this.actions$.pipe(
//     ofType<GetUser>(EUserActions.GetUser),
//     map(action => action.payload),
//     // perform logic based on store state in effect, only show details if an user was selected
//     withLatestFrom(this.store.pipe(select(selectUserList))), // To get the latest state of other Observable once use
//      withLatestFrom operator
//     switchMap(([id, users]) => { // the next operator receives an array of previous Observable contents and the one from withLatestFrom.
//       const selectedUser = users.filter(user => user.id === +id)[0];
//       return of(new GetUserSuccess(selectedUser));
//     })
//   );

  @Effect()
  getPosts$ = this.actions$.pipe(
    ofType<GetPosts>(EPostActions.GetPosts),
    withLatestFrom(this.store.pipe(select(selectPostList))),
    // for updates you will often need to process the result of each API call, in which case mergeMap or concatMap are better options.
    switchMap(([action, posts]) => {
      if (posts !== null) {
        // We either already have the state in the store, or are already loading, so there is no need to kick off another API call
        console.log('get posts cancelled');
        return EMPTY;
      }
      return this.postService.getPosts().pipe(
        map(response => new GetPostsSuccess(response)),
        catchError(error => of(new GetPostsError(error.statusText)))
      );
    }),
  );
*/

  // ngrx v8
  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPosts),
      withLatestFrom(this.store.pipe(select(fromPost.selectPostList))),
      // for updates you will often need to process the result of each API call, in which case mergeMap or concatMap are better options.
      switchMap(([action, posts]) => {
        if (posts !== null) {
          // We either already have the state in the store, or are already loading, so there is no need to kick off another API call
          console.log('get posts cancelled');
          return EMPTY;
        }
        return this.postService.getPosts().pipe(
          // map(response => getPostsSuccess({ post: response })),
          map(post => getPostsSuccess({ post })),
          catchError(error => of(getPostsError(error.statusText)))
        );
      })
    )
  );

  // Effect that fires after a burger is successfully ordered, which redirects back to the home page and doesn't dispatch a new action
  // orderBurgerSuccess$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(BurgerApiActions.LoginSuccess),
  //     tap(() => this.router.navigate(['/']))
  //   ),
  //   { dispatch: false }
  // );

  constructor(
    private postService: UserService,
    private actions$: Actions,
    private store: Store<fromRoot.State>
  ) {}
}
