import { combineReducers } from "redux";
import { AnimationsState, animationsReducer } from "./animations.reducer";
import { NamesState, namesReducer } from "./names.reducer";

export interface AppState {
  animationsState: AnimationsState;
  randomNames: NamesState;
}

export const reducers = combineReducers<AppState>({
  animationsState: animationsReducer,
  randomNames: namesReducer,
});
