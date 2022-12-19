import React from "react";

const CheckoutList = (props) => {
  return (
    <div>
      
        <div class="list flex cardSearch hover:bg-slate-100/60 my-4 max-w-2xl">
          <div class="card" className="w-48">
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
            {/* <ul className="flex mx-2 mb-1">
              <li className="hover:text-red-800 font-bold">
                <a href="#">remove</a>
              </li>
            </ul> */}
          </div>
        </div>
      
    </div>
  );
};

export default CheckoutList;