import React from "react";
import CourseCheckButton from "./CourseCheckButton";
import { Link } from "react-router-dom";
import SellerInfo from "./SellerInfo";

const CompleteBuy = () => {
  return (
    <div>
      <div className="bg-yellow-100 mx-20 mt-10 rounded-lg">
        <h1 className="font-bold text-2xl py-3 ">購買成功</h1>
      </div>
      <div className="mx-20 my-2">
        <h3 className="text-lg text-left font-bold my-2">付款資訊</h3>
        <hr className="h-0.5 bg-blue-900"></hr>
        <div>
          <SellerInfo />
        </div>
      </div>
      <Link to="/Course">
        <CourseCheckButton buttonName="CourseCheck" />
      </Link>
    </div>
  );
};

export default CompleteBuy;
