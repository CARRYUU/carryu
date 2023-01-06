import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Category from "./Category";
import UploadFile from "./UploadFile";
import Description from "./Description";
import { createNewCourse } from "../../features/course/courseSlice";

import Title from "../layout/Title";
import Button from "../layout/Button";
import Input from "../layout/Input";

const CreateNewCourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    thumbnail: "",
    category: "others",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeCategory = (e) => {
    setFormData({ ...formData, category: e.target.getAttribute("value") });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewCourse(formData));
    navigate("/");
  };

  return (
    <div>
      <Title pageTitle="Let's create your course!" />
      <div className="flex max-w-4xl items-center justfiy-center px-4 py-8 mx-auto lg:py-0">
        <div className="mt-auto flex flex-col justify-center w-full py-8 px-2 bg-white rounded-lg shadow dark:bg-gray-100">
          <div className="flex flex-wrap justify-center item-center">
            <Category
              onChange={handleChange}
              handleChangeCategory={handleChangeCategory}
              category={formData.category}
              title={formData.title}
            />

            <div className="w-1/5 flex flex-wrap">
              <Input
                labelName="Price"
                name="price"
                id="price"
                type="number"
                placeholder="800"
                onChange={handleChange}
                value={formData.price}
                min="0"
                max="9999"
                step="100"
              />
            </div>
          </div>

          <Description
            onChange={handleChange}
            id="description"
            name="description"
            description={formData.description}
          />
          <UploadFile onChange={handleChange} file={formData.file} />
          <Button buttonName="Upload" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewCourse;
