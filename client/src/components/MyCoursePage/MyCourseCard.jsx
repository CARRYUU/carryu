import React from "react";

const MyCourseCard = (props) => {
  return (
    <div>
      <div className="inline-block duration-300 hover:scale-105 motion-reduce:transform-none h-80">
        <div className="snap-center card mx-2">
          {/* 圖片 */}
          <img
            src={require("../../image/carryu_big_logo_white_background.png")}
            alt="課程圖片"
            className="object-cover"
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
