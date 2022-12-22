
{/*需要連結直接購買按鍵與加入購物車按鍵*/}
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import { getCourseInfoById } from "../../features/course/courseSlice";

import Title from "../layout/Title";
import Button from "../layout/Button";
import { DiCodeigniter } from "react-icons/di";
import { BsCurrencyDollar } from "react-icons/bs";

const CourseInfo = () => {
  const dispatch = useDispatch();

  const { courseInfo, isLoading } = useSelector((state) => state.course);

  let { id } = useParams();

  useEffect(() => {
    dispatch(getCourseInfoById(id));
  }, []);
  

  const { 
    title, 
    category, 
    students_count, 
    instructor, 
    description, 
    price 
  } = courseInfo;

  return (
    <div>
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      )}

      {courseInfo && (
        <div>
          <div className="min-h-screen">

          <Title pageTitle="課程資訊" />

          <div  >
            <div className="flex  flex-wrap md:flex-row justify-center  ">
              {/* 圖片 */}
              <img
                src={require("../../image/2.JPG")}
                alt="課程圖片"
                className=" object-cover w-full h-96 rounded-t-lg  md:h-96 md:w-96 md:rounded-none md:rounded-l-lg mt-20"
              />
            
              
              <div className="  sticky top-5 mt-5 ml-5 md:ml-40 flex-col  ">

                {/* 類別 */}
                <div className="  text-left  mb-5 text-gray-500">
                  <h1 className="category">
                    類別 &gt;
                    {category}
                  </h1>
                </div>

                {/* 標題 */}
                <div className="  inline-block leading-3 ">
                  <div className="  text-5xl  font-bold text-black  text-left max-w-md h-20 ">
                    <h2 className="category">{title}</h2>
                  </div>
                </div>

                {/* 觀看人數符號 */}
                <div class="  inline-block text-red-600 ">
                  <DiCodeigniter size={21} className="ml-1" />
                </div>

                {/* 觀看人數 */}
                <div class="  inline-block">
                  <div className=" text-black py-1 max-w-md ">
                    <p className="students_count">{students_count}</p>
                  </div>
                </div>

                {/* 老師及助教 */}
                <div className="  text-lg sm:text-2xl font-bold text-black text-left leading-normal pt-3 mt-3">
                  <p className="instructor">{instructor}</p>
                </div>

                {/* 課程資訊 */}
                <div className="  text-gray-500 py-4 max-w-lg overflow-auto text-left h-40 mt-3 ">
                  <p className="description">{description}</p>
                </div>

                {/* 金錢符號 */}
                <div class="  inline-block text-amber-500 h-9 ">
                  <BsCurrencyDollar size={42} className="ml-1 " />
                </div>

                {/* 課程價錢 */}
                <div class="  inline-block ">
                  <div className="  text-black text-5xl pt-10 pr-4 ">
                    <p className="price">{price}</p>
                  </div>
                </div>

                {/* 立即購買按鈕 */}
                <div className="   mt-2 mb-2 md:inline-block md:mb-8 ">
                  <Button buttonName="Buy it Now" /*onClick={}*/ />
                </div>

                {/* 加入購物車按鈕 */}
                <div className="  md:inline-block md:mb-8">
                  <Button buttonName="Add to Cart" /*onClick={}*/ />
                </div>

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
