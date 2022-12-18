import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import CheckoutList from "./CheckoutList";
import TotalPrice from "../Cart/TotalPrice";
import ShopList from "../Cart/CartItem";
import Payment from "./Payment";
import CheckoutPrice from "./CheckoutPrice";

const Checkout = (props) => {
  return (
    <div>
      <body className="mx-20 bg-slate-50 rounded-md pt-2">
        <h1 className="font-bold text-2xl mb-10 text-left m-5 text-primary">
          Checkout
        </h1>
        <div className="flex text-left m-5 flex-wrap">
          <div id="ShopList" className="flex-col flex-1 text-left ">
            <div>
              <Payment />
            </div>
            <h3 className="font-bold text-xl ">Order detail</h3>
            <hr className="mx-10 my-4 h-0.5 bg-gray-100" />
            <CheckoutList
              imageUri={require("../../image/3.JPG")}
              title="陽明山大爆走"
              badge1="爬起來"
              badge2="耶~我誰"
              price="50000"
            />
            <CheckoutList
              imageUri={require("../../image/4.JPG")}
              title="山岳攝影"
              badge1="相機"
              badge2="photoshop"
              price="400"
            />
          </div>
          <CheckoutPrice Coursetitle="陽明山大抱走" Courseprice="500" />
        </div>
      </body>
    </div>
  );
};

export default Checkout;
