import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="snap-center card mt-6 ml-6">
        {/* 圖片 */}
        <img
          src={require("../../image/2.JPG")}
          alt="課程圖片"
          className="object-cover"
        />
        {/* 內容 */}
        <div className="p-5 flex-col gap-3 text-left ">
          {/* bedge */}
          <div className="flex items-center gap-2">
            <span className="badge">{props.badge1}</span>
            <span className="badge">{props.badge2}</span>
            <span className="badge">{props.badge3}</span>
          </div>
          {/* title */}
          <h2 className="class-title ">{props.vedioName}</h2>{" "}
          <p className="text-ellipsis"> {props.vedioInfo}</p>
          {/* price */}
          <span className="text-xl font-bold">${props.salePrice}</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">
              ${props.originalPrice}
            </span>
            <span className="discount-percent">
              save{" "}
              {Math.round((1 - props.salePrice / props.originalPrice) * 100)}%
            </span>
          </div>
          {/* buy button */}
          <div className="mt-5 flex gap-2">
            <button className="button-primary">Add to cart</button>
            <button className="button-loveicon">
              <img
                src={require("../../icon/favorite.png")}
                alt="add to favorite"
                className="opacity-50"
              ></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
