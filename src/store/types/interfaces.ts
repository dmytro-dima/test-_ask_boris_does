import * as types from "./actions-types";

export interface Personages {
  birth_year: string,
  created: string,
  name: string,
  gender: string
}

export interface Comment {
  userId: string,
  comment: string,
  created: any
}

export interface Data {
  "count": number,
  "results": Personages[],
}

export interface StateInterface {
  errMess: string | null;
  personages: Personages[];
  loading: boolean;
  sortType:  'asc' | 'desc',
  count: number,
  comments: Comment[],
}

export interface setPersonagesAction {
  type: typeof types.LOADING_PERSONAGES;
  payload: boolean;
}

export interface loadingPersonagesAction {
  type: typeof types.SET_PERSONAGES;
  payload: Data;
}

export interface failedFetchAction {
  type: typeof types.FETCH_FAILED;
  payload: string;
}

export interface sortPersonagesAction {
  type: typeof types.SORT_PERSONAGES;
  payload: string;
}

export interface addCommentAction {
  type: typeof types.ADD_COMMENT;
  payload: Comment;
}

export interface deleteCommentAction {
  type: typeof types.DELETE_COMMENT;
  payload: string;
}

export type CommentsActionTypes = addCommentAction | deleteCommentAction

export type PersonagesActionTypes = setPersonagesAction | failedFetchAction | loadingPersonagesAction  | sortPersonagesAction ;

export type AppAction = CommentsActionTypes | PersonagesActionTypes;
