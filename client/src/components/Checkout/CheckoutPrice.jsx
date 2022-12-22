import React from "react";
import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";

const CheckoutPrice = (props) => {
  const { cartItems } = props;

  let totalPrice = 0;

  cartItems.forEach((item) => {
    totalPrice += item.price;
  });

  return (
    <div>
      <div id="totalPrice" className="flex-col m-4 flex-none text-left">
        <div>
          <h3 className="font-bold text-m text-gray-500">Summary:</h3>
          {cartItems.map((item) => (
            <div>
              <hr className="border-double  mb-4 h-0.5 bg-gray-100 mx-2"></hr>
              <div className="flex m-2">
                <h4 className="text-sm text-gray-700 font-bold mr-2 w-40">
                  {item.title}
                </h4>
                <h4 className="text-sm text-gray-700 font-bold text-right">
                  NT${item.price}
                </h4>
              </div>
            </div>
          ))}
        </div>
        <h3 className="font-bold text-s text-gray-500">Total:</h3>
        <h3 className="font-bold text-2xl  my-5 ">NT${totalPrice}</h3>
        <Link to="/complete-buy">
          <CheckoutButton buttonName="Complete Checkout" />
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPrice;
