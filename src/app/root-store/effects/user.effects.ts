import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of, EMPTY } from 'rxjs';
import { switchMap, map, withLatestFrom, tap, catchError } from 'rxjs/operators';
import * as fromRoot from '../app.reducers';
import * as fromUsers from '../reducers/user.reducers';
import {
  GetUsersSuccess,
  GetUsersError,
  EUserActions,
  GetUserSuccess,
  GetUser,
  GetUsers
} from '../actions/user.actions';
import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    // perform logic based on store state in effect, only show details if an user was selected
    // To get the latest state of other Observable once use withLatestFrom operator
    withLatestFrom(this.store.pipe(select(fromUsers.selectUserList))),
    switchMap(([id, users]) => { // the next operator receives an array of previous Observable contents and the one from withLatestFrom.
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess(selectedUser));
    })
  );

  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    withLatestFrom(this.store.pipe(select(fromUsers.selectUserList))),
    // for updates you will often need to process the result of each API call, in which case mergeMap or concatMap are better options.
    switchMap(([action, users]) => {
      if (users !== null) {
        // We either already have the state in the store, or are already loading, so there is no need to kick off another API call
        console.log('get users cancelled');
        return EMPTY;
      }
      return this.userService.getUsers().pipe(
        map(response => new GetUsersSuccess(response)),
        catchError(error => of(new GetUsersError(error.statusText)))
      );
    })
  );

  constructor(
    private userService: UserService,
    private actions$: Actions,
    private store: Store<fromRoot.State>
  ) {}
}
