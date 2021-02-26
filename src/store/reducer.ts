import { initialState } from "./initialState";
import { StateInterface } from "./types/interfaces";
import { AppAction } from "./types/interfaces";
import * as types from "./types/actions-types";
import _ from "lodash";

export const reducer = (
  state = initialState,
  action: AppAction
): StateInterface => {
  switch (action.type) {
    case types.LOADING_NEWS:
      return { ...state, loading: action.payload};
    case types.SET_NEWS:
      return { ...state, errMess: null, news: _.orderBy(state.news.concat(action.payload), state.typeField, state.sortType) , loading: false };
    case types.FETCH_FAILED:
      return { ...state, errMess: action.payload };
    case types.SORT_NEWS:
      const sortType = state.sortType === 'asc' ? 'desc' : 'asc'
      const typeField = action.payload
      return { ...state, news: _.orderBy(state.news, typeField, sortType), loading: false, sortType, typeField };
    case types.SELECT_FEED:
      return { ...state, feed: action.payload, news: []}
    default:
      return state;
  }
};
