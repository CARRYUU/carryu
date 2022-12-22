import React from "react";

const CheckoutItem = (props) => {
  return (
    <div>
      <div className="list flex cardSearch hover:bg-slate-100/60 my-4 max-w-2xl">
        <div className="card w-48">
          <img src={props.imageUri}></img>
        </div>
        <div className="mx-2">
          <h3 className="font-bold text-m m-2">{props.title} </h3>
          <div className="flex ">
            <div class="middle" className="badge ml-1">
              {props.badge1}
            </div>
            <div class="middle" className="badge ml-1">
              {props.badge2}
            </div>
          </div>
          <h3 className="font-bold text-m mx-2 text-bottom">
            NT${props.price}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
