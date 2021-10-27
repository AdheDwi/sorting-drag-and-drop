import { all, takeLatest } from "redux-saga/effects";

import { GET_ACTIVITY_LIST_REQUEST } from "../types/todoTypes";
import { getActivityListSaga } from "./todoSaga";

export function* rootSaga() {
  yield all([takeLatest(GET_ACTIVITY_LIST_REQUEST, getActivityListSaga)]);
}
