import api from "./apiConfig";

export const getActivityList = async () => {
  return await api.get("/activity-groups?email=adhe@skyshi.com");
};
