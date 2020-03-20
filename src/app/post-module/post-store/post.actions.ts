import { Action, createAction, props } from '@ngrx/store';
import { IPost } from '../../models/post.interface';

/*
// ngrx v6
export enum EPostActions {
  GetPosts = '[Post] Get Posts',
  GetPostsSuccess = '[Post] Get Posts Success',
  GetPostsError = '[Post] Get Posts Error',
//   GetUser = '[User] Get User',
//   GetUserSuccess = '[User] Get User Success'
}

export class GetPosts implements Action {
  public readonly type = EPostActions.GetPosts;
}

export class GetPostsSuccess implements Action {
  public readonly type = EPostActions.GetPostsSuccess;
  constructor(public payload: IPost[]) {}
}

export class GetPostsError implements Action {
  public readonly type = EPostActions.GetPostsError;
  constructor(public payload: string) {}
}

// export class GetUser implements Action {
//   public readonly type = EPostActions.GetPost;
//   constructor(public payload: number) {}
// }

// export class GetUserSuccess implements Action {
//   public readonly type = EUserActions.GetUserSuccess;
//   constructor(public payload: IUser) {}
// }

export type PostActions = GetPosts
  | GetPostsSuccess
  | GetPostsError;
//   | GetUser
//   | GetUserSuccess;
*/

// ngrx v8
export const getPosts = createAction(
  '[Post] Get Posts'
);

export const getPostsSuccess = createAction(
  '[Post] Get Posts Success',
  props<{ post: IPost[] }>()
);

export const getPostsError = createAction(
  '[Post] Get Posts Error',
  props<{ error: any }>()
);

