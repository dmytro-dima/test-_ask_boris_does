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
    case types.LOADING_PERSONAGES:
      return { ...state, loading: action.payload};
    case types.SET_PERSONAGES:
      return { ...state, errMess: null, personages: _.orderBy(state.personages.concat(action.payload.results), 'name', state.sortType) , count: action.payload.count,  loading: false };
    case types.FETCH_FAILED:
      return { ...state, errMess: action.payload };
    case types.ADD_COMMENT:
      return { ...state, comments: state.comments.concat(action.payload) };
    case types.DELETE_COMMENT:
      return { ...state, comments: state.comments.filter(c => c.created !== action.payload)};
    case types.SORT_PERSONAGES:
      const sortType = state.sortType === 'asc' ? 'desc' : 'asc'
      return { ...state, personages: _.orderBy(state.personages, 'name', sortType), loading: false, sortType, };
    default:
      return state;
  }
};


