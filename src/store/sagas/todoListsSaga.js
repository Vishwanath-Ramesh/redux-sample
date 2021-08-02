import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

import {
  ADD_TODO,
  SAVE_TODO,
  DELETE_TODO,
  UPDATE_TODOS,
} from "../actions/todoLists";

const BASE_URL = "http://localhost:5000/api";

function* workerSaga(action) {
  console.log(action.type);
  if (action.type === SAVE_TODO) {
    const { data } = yield axios.post(`${BASE_URL}/todos`, {
      ...action.payload,
    });

    yield put({ type: ADD_TODO, payload: data.data });
  } else if (action.type === DELETE_TODO) {
    yield axios.delete(`${BASE_URL}/todos/${action.payload.id}`);
    const { data } = yield axios.get(`${BASE_URL}/todos`);
    yield put({ type: UPDATE_TODOS, payload: { todos: data.data } });
  }
}

export default function* todoListsSaga() {
  yield takeEvery(SAVE_TODO, workerSaga);
  yield takeEvery(DELETE_TODO, workerSaga);
}
