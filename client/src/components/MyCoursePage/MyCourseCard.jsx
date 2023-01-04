import React from "react";
import { useNavigate } from "react-router-dom";

const MyCourseCard = (props) => {
  const navigate = useNavigate();

  const { courseId, courseTitle } = props;

  const handleClickToStudy = (e) => {
    e.preventDefault();

    navigate(`/course/${courseId}/content`);
  };

  return (
    <div>
      <div className="inline-block duration-300 hover:scale-105 motion-reduce:transform-none h-80">
        <div className="snap-center card mx-2">
          {/* 圖片 */}
          <img
            src={require("../../assets/images/carryu_big_logo_gray_background.png")}
            alt="課程圖片"
            className="object-cover cursor-pointer"
            onClick={handleClickToStudy}
          />
          {/* 內容 */}
          <div className="p-5 flex-col gap-3 text-left ">
            {/* title */}
            <h2 className="class-title ">{props.courseTitle}</h2>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourseCard;
