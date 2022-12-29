import React from "react";
import Title from "../layout/Title";
import Button from "../layout/Button";
import { Link } from "react-router-dom";

const InstructorHomepage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justfiy-center px-4 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex flex-col items-center justfiy-center w-3/4 py-8 px-2 bg-white rounded-lg shadow dark:bg-gray-100">
          <Title pageTitle="We’re updating the free course experience for students and instructors." />
          <ul className="space-y-1 w-4/5 text-left list-disc list-inside text-gray-700 dark:text-gray-600">
            <li>
              New free courses (published after March 17, 2020) must have less
              than 2 hours of video content.
            </li>
            <li>
              Existing free courses (published before March 17, 2020) that
              contain more than 2 hours of video content will remain published.
            </li>
            <li>
              All free courses will only consist of video content and resources.
              Certificate of completion, Q&A, and direct messaging will only be
              available for paid enrollments.
            </li>
            <li>
              To learn more about the new free course experience and policy read
              our FAQ on the teaching center.
            </li>
          </ul>
          <Link to="/course/create">
            <Button buttonName="create your course" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorHomepage;
