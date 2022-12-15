import React from "react";

const SearchResultCard = (props) => {
  return (
    <div>
      <section class="parent-section">
        <div className="cardSearch flex flex-initial pl-2 item-left my-4 text-left">
          <div className="flex-initial w-72">
            <img
              src={require("../../image/3.JPG")}
              class="thumbnail"
              width="288px"
            ></img>
          </div>
          <div class="card-details">
            <div class="Title" className="m-2 ">
              <h1>{props.vedioName}</h1>
            </div>
            <div class="badge " className="flex items-center gap-2 mx-1">
              <div class="middle" className="badge ">
                {props.badge1}
              </div>
              <div class="middle" className="badge ">
                {props.badge2}
              </div>
              <div class="middle" className="badge ">
                {props.badge3}
              </div>
            </div>
            <div class="content" className="px-2 ">
              <p>{props.vedioInfo}</p>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-xl font-bold ml-2">${props.salePrice}</span>
              <span className="text-sm line-through color-gray">
                ${props.originalPrice}
              </span>
              <span className="discount-percent">
                save{" "}
                {Math.round((1 - props.salePrice / props.originalPrice) * 100)}%
              </span>
            </div>

            <div className=" flex gap-2 m-5">
              <button className="button-primary">Add to cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchResultCard;
