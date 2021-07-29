import { all } from "redux-saga/effects";

import todoListsSaga from "./todoListsSaga";
import counterSaga from "./counterSaga";

export default function* rootSaga() {
  yield all([todoListsSaga(), counterSaga()]);
}
