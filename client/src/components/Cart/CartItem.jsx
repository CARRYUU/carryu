import React from "react";
import { useDispatch } from "react-redux";

import { removeCourseFromCart } from "../../features/cart/cartSlice";

const CartItem = (props) => {
  // Destruct props
  const { _id, title, price, thumbnail, badge1, badge2 } = props;

  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(
      removeCourseFromCart({
        course_id: _id,
      })
    );

    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return (
    <div>
      <div class="list flex cardCart hover:bg-slate-100/60 my-4   ">
        <div class="card" className=" cardimg">
          <img
            className="w-48 object-cover h-40"
            src={
              thumbnail ||
              require("../../assets/images/carryu_big_logo_gray_background.png")
            }
            alt="course thumbnail"
          ></img>
        </div>
        <div className="mx-2 flex-1">
          <h3 className="font-bold text-m m-2">{title} </h3>
          <div className="flex ">
            <div class="middle" className="badge ml-1">
              {badge1}
            </div>
            <div class="middle" className="badge ml-1">
              {badge2}
            </div>
          </div>
          <h3 className="font-bold text-m mx-2 py-2 text-bottom">NT${price}</h3>
          <ul className="flex mx-2 mb-1">
            <li className="hover:text-red-800 font-bold">
              <button onClick={handleRemoveItem}>remove</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
