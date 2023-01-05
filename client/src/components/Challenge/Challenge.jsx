import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Title from "../layout/Title";
import Roll from "./Roll";
import Category from "./Category";

import { getARandomCourse } from "../../features/course/courseSlice";

const Challenge = () => {
  const dispatch = useDispatch();

  const handleRoll = () => {
    dispatch(getARandomCourse());
  };

  const handleChooseCategory = () => {
    toast.error("此功能尚未開放，敬請期待！");
  };

  return (
    <div>
      <div>
        <Title pageTitle="請選擇：" />
        {/* <div className="h-3/6 flex items-center justify-center">
          <div className="flex snap-x place-content-center gap-16 flex-wrap"> */}
        <div className="flex flex-wrap justify-center min-h-screen gap-8 w-full px-4 py-4">
          <div className="max-h-60 w-96">
            <Roll buttonName="Let it Roll" onClick={handleRoll} />
          </div>
          <div className="max-h-60 w-96">
            <Category
              buttonName="Choose Category"
              onClick={handleChooseCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
