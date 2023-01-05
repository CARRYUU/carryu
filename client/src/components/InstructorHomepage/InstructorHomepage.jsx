import React from "react";
import Title from "../layout/Title";
import Button from "../layout/Button";
import { Link } from "react-router-dom";

const InstructorHomepage = () => {
  return (
    <div>
      <div className="flex max-w-5xl flex-col items-center justfiy-center px-4 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex flex-col items-center justfiy-center w-full py-8 px-2 bg-white rounded-lg shadow dark:bg-gray-100">
          <Title pageTitle="We’re updating the free course experience for students and instructors." />
          <ul className="space-y-1 w-4/5 py-2 text-left list-disc list-inside text-gray-700 dark:text-gray-600">
            <li>Free courses must have less than 2 hours of video content.</li>
            <li>
              The course that contain more than 2 hours of video content will
              only be available for paid enrollments.
            </li>
            <li>
              All free courses will only consist of video content and resources.
              Certificate of completion, Q&A, and direct messaging will only be
              available for paid enrollments.
            </li>
            <li>
              To learn more about the new free course experience and policy
              please contact us.
            </li>
          </ul>
          <div className="py-2">
            <Link to="/course/create">
              <Button buttonName="create your course" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorHomepage;
