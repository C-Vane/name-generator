import { Dispatch } from "redux";
import { all, fork } from "redux-saga/effects";
import {apiAnimation,apiName} from "../services";
import { BaseAction } from "../actions/index";
import { toggleRotationSaga } from "./toggleRotation.saga";
import { randomNamesSaga } from "./randomNames.saga";

// Register all your watchers
export const rootSaga = function* root(dispatch: Dispatch<BaseAction>) {
  yield all([fork(randomNamesSaga,apiName,dispatch),fork(toggleRotationSaga, apiAnimation, dispatch)]);
};
