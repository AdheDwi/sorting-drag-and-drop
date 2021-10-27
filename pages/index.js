import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { wrapper } from "../redux/store";
import Header from "../components/header";
import ActivityContainer from "../containers/activityContainer";
import { getActivityListAction } from "../redux/actions/todoAction";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivityListAction());
    console.log("masuk");
  }, []);

  const { loadingActivityList, errActivityList, dataActivityList } =
    useSelector((state) => state.todo);

  return (
    <>
      <Header />
      <ActivityContainer />
    </>
  );
};

// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   store.dispatch(getActivityListAction());
// });

// export const getStaticProps = wrapper.getStaticProps((store) => () => {
//   store.dispatch(getActivityListAction());
// });

export default Home;
