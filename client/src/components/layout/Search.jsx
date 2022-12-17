import React, { useState } from "react";
import { useNavigate } from "react-router";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    event.preventDefault();

    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    navigate(`/courses/search/${searchInput}`);
  };

  // let dataSearch = CourseData.cardData.filter((item) => {
  //   return Object.keys(item).some((key) =>
  //     item[key]
  //       .toString()
  //       .toLowerCase()
  //       .includes(filter.toString().toLowerCase())
  //   );
  // });

  return (
    <div className="px-6 flex flex-[5_1_400px] items-center relative">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>

      <input
        type="search"
        placeholder="search course..."
        className="ring-mainBlue ring-2 hover:ring-blue-700 focus:ring-inset  block p-1 pl-6 w-80 ud-text-input  ud-text-input-small ud-text-sm ud-search-form-autocomplete-input js-header-search-field shadow-md rounded-xl"
        value={searchInput}
        onChange={handleChangeInput}
        name="search"
      />

      <button onClick={handleSubmit} className="button-search">
        Search
      </button>
    </div>
  );
};

export default Search;
