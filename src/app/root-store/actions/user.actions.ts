import { Action } from '@ngrx/store';
import { IUser } from '../../models/user.interface';

export enum EUserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUsersError = '[User] Get Users Error',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success'
}

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload: IUser[]) {}
}

export class GetUsersError implements Action {
  public readonly type = EUserActions.GetUsersError;
  constructor(public payload: string) {}
}

export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
  constructor(public payload: number) {}
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(public payload: IUser) {}
}

export type UserActions = GetUsers
  | GetUsersSuccess
  | GetUsersError
  | GetUser
  | GetUserSuccess;
