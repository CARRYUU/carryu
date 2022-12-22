import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Title from "../layout/Title";
import HomePageCourseList from "./HomePageCourseList";
import Loading from "../layout/Loading";
import {
  getTenMostPopularCourses,
  getTenMostNewestCourses,
} from "../../features/allCourses/allCoursesSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { tenMostPopularCourses, tenMostNewestCourses, isLoading } =
    useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getTenMostPopularCourses());
    dispatch(getTenMostNewestCourses());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        <Title pageTitle="熱門排行 | Popular Course" />
        <HomePageCourseList coursesData={tenMostPopularCourses} />
      </div>

      <div>
        <Title pageTitle="最新課程 | Newest Course  " />
        <HomePageCourseList coursesData={tenMostNewestCourses} />
      </div>
    </div>
  );
};

export default HomePage;
