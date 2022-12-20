import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import Study from "../Study/Study";

const Course = (props) => {
  return (
    <div>
      <Header />
      <body>
        <div className="bg-black  my-5 h-40 px-10 pt-5">
          <h1 className=" my-10 font-bold text-4xl mb-10 text-left m-5 text-white">
            My Learing
          </h1>
        </div>
        <div className="flex flex-wrap">
          <Link to="/Study">
            <CourseCard
              vedioName="陽明山大抱走"
              vedioInfo="快點來學習爬山，我好想爬山得思"
            />
            </Link>
            <Link to="/Study">
            <CourseCard
              vedioName="陽明山大抱走"
              vedioInfo="快點來學習爬山，我好想爬山得思"
            />
            </Link>
        </div>
      </body>
      <Footer />

      
    </div>
  );
};

export default Course;
