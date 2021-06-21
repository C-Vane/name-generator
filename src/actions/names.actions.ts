import { BaseAction } from ".";

export const NamesActionIds = {
  UPDATE_NAMES: "UPDATE_RANDOM_NAMES",
  TOGGLE_NAMES: "TOGGLE_NAMES",
};

export const namesUpdateAction: (
  names: Array<String>
) => BaseAction = (names) => ({
  type: NamesActionIds.UPDATE_NAMES,
  payload: { names },
});

export const namesToggleAction: (
) => BaseAction = () => ({
  type: NamesActionIds.TOGGLE_NAMES,
  payload: { },
});
