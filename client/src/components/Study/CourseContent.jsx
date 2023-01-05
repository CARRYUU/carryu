import React from "react";

const CourseContent = () => {
  return (
    <div id="content" className="mx-5 ml-10">
      <ul className="my-2 text-xl font-bold">
        <h1 className=" font-bold text-3xl mb-5 text-left text-mainBlue italic">Course Content</h1>
        <li className="hover:text-gray-500">
          <a href="#0">此區域尚在開發中</a>
        </li>
        <li className="hover:text-gray-500">
          <a href="#1">Section 1: 課程介紹</a>
        </li>
        <li className="hover:text-gray-500"></li>
        <li className="hover:text-gray-500">
          <a href="#2">Section 2: HTML</a>
        </li>
        <li className="hover:text-gray-500">
          <a href="#3">Section 3: CSS</a>
        </li>
        <li className="hover:text-gray-500">
          <a href="#4">Section 4: JavaScript</a>
        </li>
        <li className="hover:text-gray-500">
          <a href="#5">Section 5: React</a>
        </li>
      </ul>
      <hr className="mx-10 my-4 h-0.9 bg-gray-200" />
    </div>
  );
};

export default CourseContent;
