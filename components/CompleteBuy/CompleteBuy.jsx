import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import CourseCheckButton from "./CourseCheckButton";
import { Link } from "react-router-dom";
import SellerInfo from "./SellerInfo";

const CompleteBuy = (props) => {
  return (
    <div>
      <Header />
      <body>
        <div className="bg-yellow-100 mx-20 mt-10 rounded-lg">
          <h1 className="font-bold text-2xl py-3 ">訂單成功 </h1>
        </div>
        <div className="mx-20 my-2">
          <h3 className="text-lg text-left font-bold my-2">付款資訊</h3>
          <hr className="h-0.5 bg-blue-900"></hr>
          <div>
            <SellerInfo/>
          </div>
        </div>
        <Link to="/Course">
          <CourseCheckButton buttonName="CourseCheck" />
        </Link>
      </body>
      <Footer />
    </div>
  );
};

export default CompleteBuy;
