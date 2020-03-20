// import { EPostActions } from '../actions/post.actions';
// import { PostActions } from '../actions/post.actions';
import { createReducer, on, Action, combineReducers, createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { getPostsSuccess, getPostsError } from './post.actions';
import * as fromRoot from '../../root-store/app.reducers';
import { IPost } from '../../models/post.interface';

// State ---------------------------------------------------------------------
export interface PostState {
    posts: IPost[];
    selectedPost: IPost;
    error: string;
}

export const initialPostState: PostState = {
    posts: null,
    selectedPost: null,
    error: null
};

// Create a new app state with feature state
export interface State extends fromRoot.State {
  list: PostState;
}

// Reducers -------------------------------------------------------------------
/*
// ngrx v6
export const postReducers = (
  state = initialPostState,
  action: PostActions
): IPostState => {
  switch (action.type) {
    case EPostActions.GetPostsSuccess: {
      return {
        ...state,
        posts: action.payload,
        error: null
      };
    }
    // case EPostActions.GetPostSuccess: {
    //   return {
    //     ...state,
    //     selectedPost: action.payload,
    //     error: null
    //   };
    // }
    case EPostActions.GetPostsError: {
      return {
        ...state,
        error: action.payload
      };
    }

    default:
      return state;
  }
};
*/

// ngrx v8
export const postReducers = createReducer(
  initialPostState,
  on(getPostsSuccess, (state, { post }) => ({ // state => ({ ... })
    ...state,
    posts: post,
    error: null
  })),
  on(getPostsError, (state, { error }) => ({
    ...state,
    error // error: error
  })),
);

// Reducers Map ----------------------------------------------------------------
// Angular ahead-of-time (AOT) compiler (the compiler used for producing production builds) does not support function expressions.
// It's therefore necessary to wrap the createReducer function in an exported function
// single reducer for postData state
// export function reducer(state: IPostState | undefined, action: Action) {
//   return postReducers(state, action);
// }

// multiple reducers for postData state nested properties
export function reducers(state: State | undefined, action: Action) {
  return combineReducers({
    list: postReducers,
  })(state, action);
}

// Selectors ------------------------------------------------------------------
/*
// Store Structure
{
  usersInfo: {
    users: null,
    selectedUser: null,
    error: null
  },
  postsInfo: { // forFeature name
    list: { // post state
      posts: null,
      selectedPost: null,
      error: null
    }
  }
}
*/

export const selectPostInfoState: MemoizedSelector<State, State> = createFeatureSelector<State>('postsInfo');
//                                               < state , result >
// export const selectPostState: MemoizedSelector<State, PostState> = createFeatureSelector<PostState>('postsInfo');

export const selectPostListState = createSelector(
  selectPostInfoState,
  state => state.list
);

// Selectors are memoised, memoized - only recalculate when required to do so
export const selectPostList: MemoizedSelector<State, any> = createSelector(
  selectPostListState, // post state
  (state: PostState) => state.posts // return posts from post state
);

export const selectPostListError: MemoizedSelector<State, any> = createSelector(
  selectPostListState,
  (state: PostState) => state.error // return error message
);
