import React, { useState, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";

const CategoryTitle = (props) => {
  const [open, setOpen] = useState(false);
  const allCategories = [
    { key: "web-development", value: "web-development" },
    { key: "programming-language", value: "programming-language" },
    { key: "finance", value: "finance" },
    { key: "it-and-software", value: "it-and-software" },
    { key: "art-design", value: "art-design" },
    { key: "system-design", value: "system-design" },
    { key: "music", value: "music" },
    { key: "marketing", value: "marketing" },
    { key: "others", value: "others" },
  ];

  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });

  return (
    <div className="w-3/5">
      <label className="block mb-2 text-lg font-bold text-gray-900">
        Course title & category
      </label>
      <div className="relative flex mb-4">
        <button
          ref={imgRef}
          onClick={() => setOpen(!open)}
          name="category"
          id="category"
          className=" flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-semibold text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 "
        >
          {open && (
            <div
              ref={menuRef}
              className="absolute top-12 left-0 bg-gray-100 text-mainBlue font-bold p-3 w-48 shadow-lg  "
            >
              <ul>
                <div>
                  {allCategories.map((obj) => {
                    return (
                      <li
                        className="p-1 text-la cursor-pointer rounded hover:bg-mainBlue hover:text-white"
                        key={obj.key}
                        value={obj.value}
                        onClick={props.handleChangeCategory}
                      >
                        {obj.value}
                      </li>
                    );
                  })}
                </div>
              </ul>
            </div>
          )}
          {props.category}
          <RiArrowDropDownLine
            className="ml-1"
            size={20}
            pointerEvents="none"
          />
        </button>
        <div className="w-full">
          <input
            onChange={props.onChange}
            value={props.title}
            name="title"
            id="title"
            type="text"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="ex. 30 days become the React master"
            required
          ></input>
        </div>
      </div>
    </div>
  );
};

export default CategoryTitle;
