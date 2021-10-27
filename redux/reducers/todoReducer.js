import { HYDRATE } from "next-redux-wrapper";
import {
  GET_ACTIVITY_LIST_REQUEST,
  GET_ACTIVITY_LIST_FAILURE,
  GET_ACTIVITY_LIST_SUCCESS,
} from "../types/todoTypes";

const initialTodoState = {
  loadingActivityList: false,
  errActivityList: null,
  dataActivityList: null,
};

export const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };

    case GET_ACTIVITY_LIST_REQUEST:
      console.log(action);
      return {
        loadingActivityList: true,
        errActivityList: null,
      };
    case GET_ACTIVITY_LIST_SUCCESS:
      console.log(action);
      return {
        loadingActivityList: false,
        dataActivityList: action.data,
        errActivityList: null,
      };
    case GET_ACTIVITY_LIST_FAILURE:
      console.log(action);
      return {
        loadingActivityList: true,
        errActivityList: action.data,
        dataActivityList: null,
      };

    default:
      return state;
  }
};
