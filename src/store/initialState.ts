import { StateInterface } from "./types/interfaces";

export const initialState: StateInterface = {
  errMess: null,
  news: [],
  loading: false,
  sortType: 'asc',
  typeField: 'time',
  feed: 'news'
};
