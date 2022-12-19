import React from "react";
import Overview from "./Overview";
import QA from "./QA";
import CourseContent from "./CourseContent";


const List = () => {
  return (
    <div>
      <nav className="">
        <ul className="flex place-content-center font-bold mt-4 ">
          <li className="px-10 hover:text-gray-800  text-gray-500">
            <a href="#Course">Course content</a>
          </li>
          <li className="px-10 hover:text-gray-800  text-gray-500">
            <a href="#Overview">Overview</a>
          </li>
          <li className="px-10 hover:text-gray-800   text-gray-500">
            <a href="#QA">Q&A</a>
          </li>
        </ul>
        <hr className="mx-10 my-4 h-0.5 bg-gray-100" />
      </nav>

      <div class="detail" className="text-left">
        <CourseContent/>
        <Overview/>
        <QA/>
      </div>
    </div>
  );
};

export default List;
