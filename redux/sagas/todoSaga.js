import { call, put } from "redux-saga/effects";

import {
  GET_ACTIVITY_LIST_FAILURE,
  GET_ACTIVITY_LIST_SUCCESS,
} from "../types/todoTypes";

import { getActivityList } from "../services/todoApi";

export function* getActivityListSaga() {
  const { ok, data } = yield call(getActivityList);

  if (ok) {
    yield put({ type: GET_ACTIVITY_LIST_SUCCESS, data });
  } else {
    yield put({ type: GET_ACTIVITY_LIST_FAILURE, data });
  }
}
