import { BaseAction } from "../actions";
import { NamesActionIds } from "../actions/names.actions";
export interface NamesState {
  names: Array<String>;
}

const initialState: NamesState = {
  names: [],
};

export const namesReducer = (
  state: NamesState = initialState,
  action: BaseAction
): NamesState => {
  switch (action.type) {
    case NamesActionIds.UPDATE_NAMES:
      return { ...state, names: action.payload.names };
    default:
      return state;
  }
};

