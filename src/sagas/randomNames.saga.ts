import { call, put, takeEvery } from "redux-saga/effects";
import { BaseAction } from "../actions";
import { Dispatch } from "redux";
import { RandomNamesApi } from "../services/generateRandomNames";
import {
  NamesActionIds,
  namesUpdateAction,
} from "../actions/names.actions";
import names from "../assets/data/names.json";

const listOfNames:String[]=names

export function* randomNamesSaga(
  api: RandomNamesApi,
  dispatch: Dispatch<BaseAction>
) {
  //@ts-ignore
  return yield takeEvery(NamesActionIds.TOGGLE_NAMES, (action) =>
    randomNames(api, dispatch, action)
  );
}

function* randomNames(
  api:RandomNamesApi,
  dispatch: Dispatch<BaseAction>,
  action: BaseAction
) {
  const names: Array<String> = yield call(() =>
    api.randomNames.generateRandomNames( Array.from(listOfNames) as String[])
  );
  yield put(namesUpdateAction(names));
}
