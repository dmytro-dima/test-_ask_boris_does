import { createContext } from "react";
import {StateInterface} from "../store/types/interfaces";
import {initialState} from "../store/initialState";

interface StateContext {
  state: StateInterface;
  dispatch: any;
}

export const ContextApp = createContext<StateContext>({
  state: initialState,
  dispatch: null,
});