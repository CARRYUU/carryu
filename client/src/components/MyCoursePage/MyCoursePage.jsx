import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CourseCard from "./MyCourseCard";

import { getUserPurchaseHistory } from "../../features/user/userSlice";

const Course = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const purchase_history = user?.purchase_history;

  // Get all the courses that the user has purchased and filter out the courses that the user had refunded
  const my_courses = purchase_history?.filter(
    (item1) =>
      item1.type === "buy" &&
      purchase_history?.findIndex(
        (item2) =>
          item2.course_id === item1.course_id && item2.type === "refund"
      ) === -1
  );

  useEffect(() => {
    dispatch(getUserPurchaseHistory());
  }, []);

  return (
    <div className="min-h-screen">
      <div>
        <h1 className=" my-10 font-bold text-4xl mb-10 text-left m-5 text-mainBlue">
          My Learning
        </h1>
      </div>
      <div className="flex flex-wrap px-5">
        {my_courses?.map((item) => {
          return (
            <CourseCard courseId={item.course_id} courseTitle={item.title} />
          );
        })}

        {my_courses?.length === 0 && (
          <div className="text-center">
            <h1 className="text-2xl mt-4">No Course History Now!</h1>

            <Link to="/">
              <button className="bg-mainBlue text-white font-bold py-2 px-4 rounded-full">
                Let's Go To Buy Some Courses!
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Course;
