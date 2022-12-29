import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Category from "./Category";
import UploadFile from "./UploadFile";
import Description from "./Description";
import { createNewCourse } from "../../features/course/courseSlice";

import Title from "../layout/Title";
import Button from "../layout/Button";
import Input from "../layout/Input";

const CreateNewCourse = (course) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    thumbnail: "",
    category: ""
  });

  const { user } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewCourse(formData));
  };

  return (
    <div>
      <Title pageTitle="Let's create your course!" />
      <div className="flex flex-col items-center justfiy-center px-4 py-8 mx-auto lg:py-0">
        <div className="mt-auto flex flex-col justfiy-center w-3/4 py-8 px-2 bg-white rounded-lg shadow dark:bg-gray-100">
          <div className="flex justify-center">
            <Category
              onChange={handleChange}
              cayegoryValue={course.category}
              titleValue={course.title}
            />

            <div className="w-1/5">
              <Input
                labelName="Price"
                name="price"
                type=""
                placeholder="ex. 800"
                onChange={handleChange}
                value={course.price}
              />
            </div>
          </div>

          <Description
            onChange={handleChange}
            description={course.description}
          />
          <UploadFile onChange={handleChange} file={course.file} />
          <Button buttonName="Upload" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewCourse;
