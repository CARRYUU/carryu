import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TotalPrice from "./TotalPrice";
import CartItem from "./CartItem";

import { getCartItems } from "../../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const { cartItems, isLoading } = useSelector((state) => state.cart);

  const totalPrice = cartItems?.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <div>
      <body className=" sm:mx-10">
        
        <h1 className="text-mainBlue font-bold text-2xl mb-10 text-left m-5 text-primary">
          Shopping Cart
        </h1>
        <div className="flex text-left m-5 flex-wrap">
          <div id="ShopList" className="flex-col flex-1 text-left ">
            <h3 className="font-bold text-xl ">Course in Cart</h3>
            <hr className="mx-10 my-4 h-0.5 bg-gray-100" />
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem
                  key={item._id}
                  _id={item._id}
                  title={item.title}
                  price={item.price}
                  thumbnail={item.thumbnail}
                  badge1={item.category}
                  badge2={item.students_count}
                />
              ))
            ) : (
              <div className="text-center text-gray-500">
                <h3 className="font-bold text-xl ">
                  {isLoading ? "Loading..." : "No course in cart"}
                </h3>
              </div>
            )}
          </div>
          {cartItems && cartItems.length > 0 && (
            <TotalPrice totalPrice={totalPrice} />
          )}
        </div>
      </body>
    </div>
  );
};

export default Cart;
