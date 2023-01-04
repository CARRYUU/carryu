import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Title from "../layout/Title";
import HomePageCourseList from "./HomePageCourseList";
import Loading from "../layout/Loading";
import {
  getTenMostPopularCourses,
  getTenMostNewestCourses,
} from "../../features/allCourses/allCoursesSlice";

const HomePage = () => {
  //slide function
  const slider = useRef([]);
  const slideLeft = (index) => {
    slider.current[index].scrollLeft = slider.current[index].scrollLeft - 500;
  };
  const slideRight = (index) => {
    slider.current[index].scrollLeft = slider.current[index].scrollLeft + 500;
  };

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
        <div className="flex items-center relative">
          <MdChevronLeft
            className="cursor-pointer opacity-50 hover:opacity-100"
            onClick={() => slideLeft(0)}
            size={40}
          />
          <div
            ref={(el) => (slider.current[0] = el)}
            className=" w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            <HomePageCourseList coursesData={tenMostPopularCourses} />
          </div>
          <MdChevronRight
            className="cursor-pointer opacity-50 hover:opacity-100"
            onClick={() => slideRight(0)}
            size={40}
          />
        </div>
      </div>

      <div>
        <Title pageTitle="最新課程 | Newest Course  " />
        <div className="flex items-center relative">
          <MdChevronLeft
            className="cursor-pointer opacity-50 hover:opacity-100"
            onClick={() => slideLeft(1)}
            size={40}
          />
          <div
            ref={(el) => (slider.current[1] = el)}
            className=" w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            <HomePageCourseList coursesData={tenMostNewestCourses} />
          </div>
          <MdChevronRight
            className="cursor-pointer opacity-50 hover:opacity-100"
            onClick={() => slideRight(1)}
            size={40}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
