import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Search = () => {
  const [searchedText, setSearchedText] = useState("");

  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    event.preventDefault();

    setSearchedText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate(`/course/search/${searchedText}`, {
      state: { searchedText: searchedText },
    });
  };

  return (
    <div>
      <div className="px-4 flex flex-[5_1_400px] items-center relative my-2">
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
          value={searchedText}
          onChange={handleChangeInput}
          name="search"
        />

        <button onClick={handleSubmit} className="button-search">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
