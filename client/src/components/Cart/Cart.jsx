import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Button from "../layout/Button";
import ShopList from "./ShopList";
import TotalPrice from "./TotalPrice";

const Cart = (props) => {
  return (
    <div>
      <body className="mx-20">
        <div className="w-32 flex-initial "></div>
        <h1 className="font-bold text-2xl mb-10 text-left m-5 text-primary">
          Shopping Cart
        </h1>
        <div className="flex text-left m-5 flex-wrap">
          <div id="ShopList" className="flex-col flex-1 text-left ">
            <h3 className="font-bold text-xl ">Course in Cart</h3>
            <hr className="mx-10 my-4 h-0.5 bg-gray-100" />
            <ShopList
              imageUri={require("../../image/3.JPG")}
              title="陽明山大爆走"
              badge1="爬起來"
              badge2="耶~我誰"
              price="50000"
            />
            <ShopList
              imageUri={require("../../image/4.JPG")}
              title="山岳攝影"
              badge1="相機"
              badge2="photoshop"
              price="400"
            />
          </div>
          <TotalPrice />
        </div>
      </body>
    </div>
  );
};

export default Cart;
