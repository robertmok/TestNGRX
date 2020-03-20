import { EUserActions } from '../actions/user.actions';
import { UserActions } from '../actions/user.actions';
import { IUser } from '../../models/user.interface';
import { createSelector } from '@ngrx/store';
import * as fromRoot from '../app.reducers';

// State -------------------------------------------------
export interface UserState {
  users: IUser[];
  selectedUser: IUser;
  error: string;
}

export const initialState: UserState = {
  users: null,
  selectedUser: null,
  error: null
};

// Reducers ----------------------------------------------
export const userReducers = (
  state = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload,
        error: null
      };
    }
    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload,
        error: null
      };
    }
    case EUserActions.GetUsersError: {
      return {
        ...state,
        error: action.payload
      };
    }

    default:
      return state;
  }
};

// Selectors --------------------------------------------------------------
// app.users state
const selectUsers = (state: fromRoot.State) => state.usersInfo;

export const selectUserList = createSelector(
  selectUsers, // accepts users state
  (state: UserState) => state.users // returns users from users state
);

export const selectSelectedUser = createSelector(
  selectUsers,
  (state: UserState) => state.selectedUser // result to return
);

export const selectUserListError = createSelector(
  selectUsers,
  (state: UserState) => state.error // return error message
);
