import React from "react";
import classImage from "../image/class.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ClassInformation = () => {
  return (
    <div
      name="classinformation"
      className="h-screen w-full bg-gradient-to-b from-black
        to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center h-full px-4 md:flex-row scroll-py-3"
      >
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-3xl sm:text-5xl font-bold text-white  text-left ">
            三分鐘笑話速成班
          </h2>
          <ls className="text-xl sm:text-2xl font-bold text-white leading-normal pt-3">
            老師:小蝸
          </ls>
          <ls className="text-xl sm:text-2xl font-bold text-white leading-normal pt-1">
            助教:小白
          </ls>
          <p className="text-gray-500 py-4 max-w-md">
            想學會如何快速講出好聽又吸引人的笑話嗎？挑選這個課程就對了！主豆然豆其
          </p>

          <div>
            <button
              className="group text-white w-fit px-3 py-2 my-2 
                    flex items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer"
            >
              Buy
              <span className="group-hover:scale-125 duration-200">
                <AiOutlineShoppingCart size={21} className="ml-2" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={classImage}
            alt="product profile"
            className="rounded-2xl mx-auto h-auto w-2/3  overflow-visible"
          />
        </div>
      </div>
    </div>
  );
};

export default ClassInformation;
