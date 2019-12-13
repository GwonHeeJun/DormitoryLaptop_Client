import {fork} from "redux-saga/effects"

import {helloSaga} from "./Counter/Counter.saga";

export default function* root() {
  yield fork(helloSaga);
}