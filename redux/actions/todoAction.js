import { GET_ACTIVITY_LIST_REQUEST } from "../types/todoTypes";

export const getActivityListAction = () => {
  return {
    type: GET_ACTIVITY_LIST_REQUEST,
  };
};
