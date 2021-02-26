import * as types from "./actions-types";

export interface News {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
}

export interface StateInterface {
  errMess: string | null;
  news: News[];
  loading: boolean;
  sortType:  'asc' | 'desc',
  typeField: string,
  feed: string
}

export interface setNewsAction {
  type: typeof types.LOADING_NEWS;
  payload: boolean;
}

export interface loadingNewsAction {
  type: typeof types.SET_NEWS;
  payload: [];
}

export interface failedFetchAction {
  type: typeof types.FETCH_FAILED;
  payload: string;
}

export interface sortNewsAction {
  type: typeof types.SORT_NEWS;
  payload: string;
}

export interface selectFeedAction {
  type: typeof types.SELECT_FEED;
  payload: string;
}

export type TaskActionTypes = loadingNewsAction | failedFetchAction | setNewsAction | sortNewsAction | selectFeedAction;

export type AppAction = TaskActionTypes;
