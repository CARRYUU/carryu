import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";

import { addStudentToCourse } from "../../features/course/courseSlice";
import { addPurchaseRecord } from "../../features/transaction/transactionSlice";
import { removeCourseFromCart } from "../../features/cart/cartSlice";

const CheckoutPrice = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth.user);
  const { transaction_error } = useSelector((state) => state.transaction);

  const { checkoutItemList } = props;

  let totalPrice = 0;

  checkoutItemList.forEach((item) => {
    totalPrice += item.price;
  });

  const handlePurchase = (e) => {
    e.preventDefault();
    checkoutItemList.forEach((course) => {
      dispatch(
        addStudentToCourse({
          user_id: user._id,
          course_id: course._id,
        })
      );
      dispatch(
        addPurchaseRecord({
          user_id: user._id,
          course_id: course._id,
          payment_method: props.paymentMethod || "ATM",
        })
      );

      if (!transaction_error) {
        dispatch(removeCourseFromCart({ course_id: course._id }));
      }
    });

    if (!transaction_error) {
      navigate("/complete-buy");
    }
  };

  return (
    <div>
      <div id="totalPrice" className="flex-col m-4 flex-none text-left">
        <div>
          <h3 className="font-bold text-m text-gray-500">Summary:</h3>
          {checkoutItemList.map((item) => (
            <div key={item._id}>
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

        <CheckoutButton
          buttonName="Complete Checkout"
          onClick={handlePurchase}
        />
      </div>
    </div>
  );
};

export default CheckoutPrice;
