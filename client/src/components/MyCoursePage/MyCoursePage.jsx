import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CourseCard from "./MyCourseCard";
import Study from "../Study/Study";

const Course = (props) => {
    return (
      <div>
        
        <body>
          <div >
            <h1 className=" my-10 font-bold text-4xl mb-10 text-left m-5 text-mainBlue">
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
        
  
        
      </div>
    );
  };
  
  export default Course;