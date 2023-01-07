import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import Video from "./Video";
import List from "./List";

import { getCourseContentById } from "../../features/course/courseSlice";

const Study = () => {
  const dispatch = useDispatch();

  const { courseContent, isLoading } = useSelector((state) => state.course);
  const courseContentData = courseContent?.course_content;

  let { id } = useParams();

  useEffect(() => {
    dispatch(getCourseContentById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      )}

      {courseContent && (
        <div>
          <Video />
          <List courseContentData={courseContentData} />
        </div>
      )}
    </div>
  );
};

export default Study;
