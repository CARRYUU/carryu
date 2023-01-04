import React from "react";

const CourseContent = () => {
  return (
    <div id="content" className="mx-5 ml-10">
      <ul className="my-2 text-xl font-bold">
        <li className="hover:text-gray-500">
          <a href="#">此區域尚在開發中</a>
        </li>
        <li className="hover:text-gray-500">
          <a href="#">Section 1: 課程介紹</a>
        </li>
        <li className="hover:text-gray-500"></li>
        <li className="hover:text-gray-500">
          <a href="#">Section 2: HTML</a>
        </li>
        <li className="hover:text-gray-500">
          <a href="#">Section 3: CSS</a>
        </li>
        <li className="hover:text-gray-500">
          <a href="#">Section 4: JavaScript</a>
        </li>
        <li className="hover:text-gray-500">
          <a href="#">Section 5: React</a>
        </li>
      </ul>
      <hr className="mx-10 my-4 h-0.9 bg-gray-200" />
    </div>
  );
};

export default CourseContent;
