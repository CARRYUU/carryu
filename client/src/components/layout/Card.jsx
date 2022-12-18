import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="snap-center card my-6 mx-6 x-72 h-[440px] ">
        {/* 圖片 */}
        <img
          src={require("../../image/2.JPG")}
          alt="課程圖片"
          className="object-cover "
        />
        {/* 內容 */}
        <div className="p-5 flex-col gap-3 text-left">
          {/* bedge */}
          <div className="flex items-center gap-2">
            {props.badge1 && <span className="badge">{props.badge1}</span>}
            {props.badge2 && <span className="badge">{props.badge2}</span>}
            {props.badge3 && <span className="badge">{props.badge3}</span>}
          </div>
          {/* title and description*/}
          <div className="h-[80px]">
            <h2 className="class-title">{props.title}</h2>{" "}
            <p className="text-ellipsis overflow-hidden max-h-12">
              {props.description}
            </p>{" "}
          </div>
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
