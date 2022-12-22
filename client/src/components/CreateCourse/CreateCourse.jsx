import React from "react";
import CategoryTitle from "./Category";
import UploadFile from "./UploadFile";
import Description from "./Description";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Title from "../layout/Title";
import Button from "../layout/Button";
import Input from "../layout/Input";

const CreateCourse = (course) => {
  return (
    <div>
      <Title pageTitle="Let's create your course!" />
      <div className="flex flex-col items-center justfiy-center px-4 py-8 mx-auto lg:py-0">
        <div className="mt-auto flex flex-col justfiy-center w-3/4 py-8 px-2 bg-white rounded-lg shadow dark:bg-gray-100">
          <div className="px-2/3">
            <CategoryTitle />

            <Input
              labelName="Price:"
              name="price"
              type="money"
              placeholder="800"
              onChange={course.handleChange}
              value={course.price}
            />
            <Description />
            <UploadFile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
