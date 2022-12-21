import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import { getCourseInfoById } from "../../features/course/courseSlice";

import Title from "../layout/Title";
import { DiCodeigniter } from "react-icons/di";
import { BsCurrencyDollar } from "react-icons/bs";

const CourseInfo = () => {
  const dispatch = useDispatch();

  const { courseInfo, isLoading } = useSelector((state) => state.course);

  let { id } = useParams();

  useEffect(() => {
    dispatch(getCourseInfoById(id));
  }, []);

  const { title, category, students_count, instructor, description, price } =
    courseInfo;

  return (
    <div>
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      )}

      {courseInfo && (
        <div>
          <Title pageTitle="課程資訊" />

          <div>
            <div className="flex ml-40">
              {/* 圖片 */}
              <img
                src={require("../../image/2.JPG")}
                alt="課程圖片"
                className=" max-w-md max-h-95  "
              />

              <div className="  mt-20 ml-40">
                {/* 類別 */}
                <div className="text-left  mb-10 text-gray-500">
                  <h1 className="category">
                    類別&gt;
                    {category}
                  </h1>
                </div>

                {/* 標題 */}
                <div className="inline-block leading-3 ">
                  <div className="  text-5xl  font-bold text-black  text-left max-w-md overflow-auto h-20 pt-6 ">
                    <h2 className="category">{title}</h2>
                  </div>
                </div>

                {/* 觀看人數符號 */}
                <div class="inline-block text-red-600 ">
                  <DiCodeigniter size={21} className="ml-1" />
                </div>

                {/* 觀看人數 */}
                <div class="inline-block">
                  <div className=" text-black py-1 max-w-md ">
                    <p className="students_count">{students_count}</p>
                  </div>
                </div>

                {/* 老師及助教 */}
                <div className=" text-lg sm:text-2xl font-bold text-black leading-normal pt-3 mt-3">
                  <p className="instructor">{instructor}</p>
                </div>

                {/* 課程資訊 */}
                <div className=" text-gray-500 py-4 max-w-lg overflow-auto h-52 mt-3 ">
                  <p className="description">{description}</p>
                </div>

                {/* 金錢符號 */}
                <div class="inline-block text-amber-500 h-9 ">
                  <BsCurrencyDollar size={42} className="ml-5 mt-0" />
                </div>

                {/* 課程價錢 */}
                <div class="inline-block ">
                  <div className="  text-black text-5xl pt-10  ">
                    <p className="price">{price}</p>
                  </div>
                </div>

                {/* 購買按鈕 */}
                <div class="inline-block -mt-3 pt-5 ">
                  <button
                    className="group text-white bg-blue-900 hover:bg-blue-700 
                              focus:ring-blue-700 focus:outline-none focus:ring-4 font-bold 
                              rounded-full text-xl w-40 h-16 text-center ml-10   "
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseInfo;
