import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

const CategoryTitle = () => {
  const [open, setOpen] = useState(false);
  const allCategories = [
    { key: "web-development" },
    { key: "programming-language" },
    { key: "finance" },
    { key: "it-and-software" },
    { key: "art-design" },
    { key: "music" },
    { key: "system-design" },
    { key: "music" },
    { key: "marketing" },
    { key: "others" }
  ];

  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });

  return (
    <div>
      <label className="block mb-2 text-lg font-bold text-gray-900">
        Course title & category
      </label>
      <div className="relative flex justify-center mb-4">
        <button
          ref={imgRef}
          onClick={() => setOpen(!open)}
          className=" flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-semibold text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 "
        >
          category
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="w-2/3">
          <input
            type="text"
            id="search-dropdown"
            class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="ex. 30 days become the React master"
            required
          ></input>
        </div>
        {open && (
          <div
            ref={menuRef}
            className="absolute top-12 left-16 bg-gray-100 text-mainBlue font-bold p-3 w-48 shadow-lg  "
          >
            <ul>
              <div>
                {allCategories.map((obj) => {
                  return (
                    <li
                      onClick=""
                      className="p-1 text-la cursor-pointer rounded hover:bg-mainBlue hover:text-white"
                      key={obj.key}
                    >
                      {obj.key}
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryTitle;
