import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCartItems } from "../../features/cart/cartSlice";

import CheckoutItem from "./CheckoutItem";
import Payment from "./Payment";
import CheckoutPrice from "./CheckoutPrice";

const Checkout = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { purchaseDirectly, oneCourseToPurchase } = useSelector(
    (state) => state.transaction
  );

  const [paymentMethod, setPaymentMethod] = useState("ATM");

  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };

  useEffect(() => {
    if (!purchaseDirectly) {
      dispatch(getCartItems());
    }
  }, []);

  console.log(oneCourseToPurchase);

  const checkoutItemList = purchaseDirectly ? [oneCourseToPurchase] : cartItems;

  console.log(checkoutItemList);

  return (
    <div>
      <div className="mx-5 bg-slate-50 rounded-md pt-2 sm:mx-20">
        <h1 className="font-bold text-2xl mb-10 text-left m-5 text-primary">
          Checkout
        </h1>
        <div className="flex text-left m-5 flex-wrap">
          <div id="ShopList" className="flex-col flex-1 text-left ">
            <div>
              <Payment handlePaymentMethod={handlePaymentMethod} />
            </div>
            <h3 className="font-bold text-xl ">Order detail</h3>
            <hr className="mx-10 my-4 h-0.5 bg-gray-100" />
            {checkoutItemList && checkoutItemList.length > 0 ? (
              checkoutItemList.map((item) => (
                <CheckoutItem
                  key={item._id}
                  id={item._id}
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
          <CheckoutPrice
            checkoutItemList={checkoutItemList}
            paymentMethod={paymentMethod}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
