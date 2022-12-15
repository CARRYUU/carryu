import React from "react";

const Search = () => {
  return (
    <div className="px-6  flex flex-[5_1_400px] items-center  relative">
      <label
        for="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>

      <input
        type="search"
        placeholder="search course..."
        className="ring-mainBlue ring-2 hover:ring-blue-700 focus:ring-inset  block p-1 pl-6 w-80 ud-text-input  ud-text-input-small ud-text-sm ud-search-form-autocomplete-input js-header-search-field shadow-md rounded-xl"
      ></input>
      <button className="button-search">Search</button>
    </div>
  );
};

export default Search;
