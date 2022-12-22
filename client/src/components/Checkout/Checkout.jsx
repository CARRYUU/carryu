import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem";
import Payment from "./Payment";
import CheckoutPrice from "./CheckoutPrice";

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <div className="mx-20 bg-slate-50 rounded-md pt-2">
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
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CheckoutItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  imageUri={item.imageUri}
                  badge1={item.category}
                  badge2={item.students_count}
                />
              ))
            ) : (
              <div className="text-center">No checkout items.</div>
            )}
          </div>
          <CheckoutPrice cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
