import React,{Component} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {ReactComponent as LoveIcon} from '../../icon/heart.svg';

import { addCourseToCart } from "../../features/cart/cartSlice";

const Card = (props) => {
  const dispatch = useDispatch();

  const handleAddToCard = () => {
    dispatch(
      addCourseToCart({
        course_id: props._id,
      })
    );
  };

  const {
    _id,
    title,
    salePrice,
    originalPrice,
    thumbnail,
    category,
    students_count,
    badge3,
    description,
  } = props;

  return (
    <div>
      <div className="snap-center card my-6 mx-6 x-72 h-[440px] ">
        {/* 圖片 */}
        <Link
          to={`/course/${_id}/info`}
          state={{
            course_id: _id,
          }}
        >
          <img
            src={require("../../image/2.JPG")}
            alt="課程圖片"
            className="object-cover "
          />
        </Link>

        {/* 內容 */}
        <div className="p-5 flex-col gap-3 text-left">
          {/* bedge */}
          <div className="flex items-center gap-2">
            {category && <span className="badge">{category}</span>}
            {students_count && <span className="badge">{students_count}</span>}
            {badge3 && <span className="badge">{badge3}</span>}
          </div>
          {/* title and description*/}
          <div className="h-[80px]">
            <h2 className="class-title">{title}</h2>{" "}
            <p className="text-ellipsis overflow-hidden max-h-12">
              {description}
            </p>{" "}
          </div>
          {/* price */}
          <span className="text-xl font-bold">${salePrice}</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">
              ${originalPrice}
            </span>
            <span className="discount-percent">
              save {Math.round((1 - salePrice / originalPrice) * 100)}%
            </span>
          </div>
          {/* buy button */}
          <div className="mt-5 flex gap-2">
            <button className="button-primary" onClick={handleAddToCard}>
              Add to cart
            </button>
            <button className="button-loveicon">
              <LoveIcon className="w-8 fill-slate-500"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
