import React from "react";
import Checkout from "../Checkout/Checkout";
import Button from "../layout/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const TotalPrice = (props) => {
  return (
    <div>
      <div id="TotalPrice" className="flex-col m-4 flex-none text-left">
        <h3 className="font-bold text-m text-gray-500">Total:</h3>
        <h3 className="font-bold text-2xl  my-5 ">NT${props.totalPrice}</h3>
        <Link to="/checkout">
          <Button buttonName="Checkout" className="flex" />
        </Link>
      </div>
    </div>
  );
};

export default TotalPrice;
