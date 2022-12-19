import React from "react";
import { Link } from "react-router-dom";


const CourseCard = (props) => {
  return (
    <div>
      <div className="inline-block duration-300 hover:scale-105 motion-reduce:transform-none">
      <div className="snap-center card mt-6 ml-6">
        {/* 圖片 */}
        <img
          src={require("../../image/2.JPG")}
          alt="課程圖片"
          className="object-cover"
        />
        {/* 內容 */}
        <div className="p-5 flex-col gap-3 text-left ">
          
          {/* title */}
          <h2 className="class-title ">{props.vedioName}</h2>{" "}
          <p className="text-ellipsis"> {props.vedioInfo}</p>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default CourseCard;