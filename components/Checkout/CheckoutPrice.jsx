import React from "react";
import CheckoutButton from "./CheckoutButton";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CompleteBuy from "../CompleteBuy/CompleteBuy";

const CheckoutPrice = (props) => {
  return (
    <div>
      <div id="TotalPrice" className="flex-col m-4 flex-none text-left">
        <div>
          <h3 className="font-bold text-m text-gray-500">Summary:</h3>
          <hr className="border-double  mb-4 h-0.5 bg-gray-100 mx-2"></hr>
          <div className="flex m-2">
            <h4 className="text-sm text-gray-700 font-bold mr-2 w-40">
              {props.Coursetitle}
            </h4>
            <h4 className="text-sm text-gray-700 font-bold text-right">
              NT${props.Courseprice}
            </h4>
          </div>
        </div>
        <h3 className="font-bold text-s text-gray-500">Total:</h3>
        <h3 className="font-bold text-2xl  my-5 ">NT${props.TotalPrice}680</h3>
        <Link to="/CompleteBuy">
          <CheckoutButton buttonName="Complete Checkout" />
        </Link>
      </div>
      <Routes>
        <Route path="/CompleteBuy" element={<CompleteBuy />} />
      </Routes>
    </div>
  );
};

export default CheckoutPrice;
