import { ActionReducerMap } from '@ngrx/store';

// import { routerReducer } from '@ngrx/router-store';
import * as fromUsers from './reducers/user.reducers';
// import { postReducers } from './post.reducers';

// State ---------------------------------------------------------
export interface State {
    usersInfo: fromUsers.UserState;
}

export const initialState: State = {
    usersInfo: fromUsers.initialState,
};

export function getInitialState(): State {
    return initialState;
}

// Reducers Map -------------------------------------------------------
export const appReducers: ActionReducerMap<State, any> = {
  // router: routerReducer,
  usersInfo: fromUsers.userReducers,
  // postsData: postReducers
};
