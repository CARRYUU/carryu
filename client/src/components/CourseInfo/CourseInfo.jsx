import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import moment from "moment";

import { getCourseInfoById } from "../../features/course/courseSlice";
import { addCourseToCart } from "../../features/cart/cartSlice";

import Title from "../layout/Title";
import Button from "../layout/Button";
import { DiCodeigniter } from "react-icons/di";
import { BsCurrencyDollar } from "react-icons/bs";
import Loading from "../layout/Loading";

const CourseInfo = () => {
  const dispatch = useDispatch();

  moment().format();

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
    price,
    created,
  } = courseInfo;

  const date = moment(created).format("YYYY-MM-DD");

  const handleAddToCart = () => {
    dispatch(addCourseToCart({ course_id: id }));
  };

  return (
    <div>
      {isLoading && <Loading />}

      {courseInfo && (
        <div>
          <div className="min-h-screen">
            <Title pageTitle="課程資訊" />

            <div className="flex justify-center items-center">
              <div className="flex flex-wrap md:flex-row justify-center items-center bg-white border rounded-lg max-w-3xl shadow-md md:w-3/5   dark:bg-gray-100 dark:hover:bg-gray-200">
                {/* 圖片 */}
                <img
                  src={require("../../image/2.JPG")}
                  alt="課程圖片"
                  className=" object-cover w-full h-96 rounded-t-lg  md:h-96 md:w-full md:rounded-t-lg my-auto"
                />

                <div className="px-8 py-16 flex-col flex-wrap ">
                  {/* 類別 */}
                  <div className="text-left mb-5 text-gray-500">
                    <h1 className="category">
                      類別 &gt;
                      {category}
                    </h1>
                  </div>

                  {/* 標題 */}
                  <div className="leading-3 min-h-min mb-2 flex">
                    <div className="text-5xl font-boldtext-black text-left max-w-md">
                      {title}
                    </div>
                    {/* 學生人數 */}
                    <div className="flex justify-center items-center text-red-600 mb-2 ">
                      <DiCodeigniter size={21} />
                      <div>
                        <div className=" text-black py-1 max-w-md ">
                          <p className="students_count">{students_count}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <ul className="font-bold text-black text-left leading-normal py-2">
                      <li>Intructor: {instructor}</li>
                      <li>Created: {date}</li>
                    </ul>
                  </div>

                  {/* 課程資訊 */}
                  <div className="  text-gray-500 py-4 max-w-lg overflow-auto text-left h-40">
                    <p className="description">{description}</p>
                  </div>

                  <div className="flex justify-center items-center">
                    {/* 金錢符號 */}
                    <div className=" text-amber-500 h-9 mb-2">
                      <BsCurrencyDollar size={42} />
                    </div>

                    {/* 課程價錢 */}
                    <div className="text-black text-5xl mb-2 mx-2">
                      <p className="price">{price}</p>
                    </div>

                    {/* 立即購買按鈕 */}
                    <div>
                      <Link to="/checkout">
                        <Button buttonName="Buy it Now" />
                      </Link>
                    </div>

                    {/* 加入購物車按鈕 */}
                    <div>
                      <Button
                        buttonName="Add to Cart"
                        onClick={handleAddToCart}
                      />
                    </div>
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
