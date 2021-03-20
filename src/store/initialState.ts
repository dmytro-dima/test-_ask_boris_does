import { StateInterface } from "./types/interfaces";

export const initialState: StateInterface = {
  errMess: null,
  personages: [],
  loading: false,
  sortType: 'asc',
  count: 0,
  comments: []
};
