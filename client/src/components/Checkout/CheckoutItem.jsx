import React from "react";

const CheckoutItem = (props) => {
  return (
    <div>
      <div className="list flex cardSearch hover:bg-slate-100/60 my-4 ">
        <div className=" cardimg ">
          <img
            src={require("../../assets/images/carryu_big_logo_gray_background.png")}
            alt="課程圖片"
            className="h-36 object-cover"
          />
        </div>
        <div className="mx-2">
          <h3 className="font-bold text-m m-2">{props.title} </h3>
          <div className="flex ">
            <div class="middle" className="badge ml-1 text-xl">
              {props.badge1}
            </div>
            <div class="middle" className="badge ml-1 text-xl">
              {props.badge2}
            </div>
          </div>
          <h3 className="font-bold text-xl mx-2 mt-2 text-bottom">
            NT${props.price}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
