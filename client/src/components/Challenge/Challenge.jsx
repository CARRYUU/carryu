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
      <div className="h-screen">
        <Title pageTitle="請選擇：" />
        <div className="h-3/6 flex items-center justify-center">
          <div className="flex snap-x place-content-center gap-16 flex-wrap">
            <Roll buttonName="Let it Roll" onClick={handleRoll} />
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
