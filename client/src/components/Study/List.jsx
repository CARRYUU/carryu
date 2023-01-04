import React from "react";

import Overview from "./Overview";
import QA from "./QA";
import CourseContent from "./CourseContent";

const List = (props) => {
  const { courseContentData } = props;
  const { title, description, instructor } = courseContentData;

  return (
    <div>
      <h1 className="text-5xl font-bold my-4 ml-10 mb-10">{title}</h1>
      <nav className="">
        <ul className="flex place-content-center font-bold mt-4 ">
          <li className="px-10 hover:text-gray-800  text-gray-500">
            <a href="#content">Course content</a>
          </li>
          <li className="px-10 hover:text-gray-800  text-gray-500">
            <a href="#overview">Overview</a>
          </li>
          <li className="px-10 hover:text-gray-800   text-gray-500">
            <a href="#qa">Q&A</a>
          </li>
        </ul>
        <hr className="mx-10 my-4 h-0.5 bg-gray-100" />
      </nav>

      <div class="detail" className="text-left">
        <CourseContent />
        <Overview description={description} instructor={instructor} />
        <QA />
      </div>
    </div>
  );
};

export default List;
