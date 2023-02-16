import React, { useState } from "react";
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
    <div className="">
      <div className="flex py-2 w-full top-0 flex-wrap items-center px-4 relative">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>

        <input
          type="search"
          placeholder="search course..."
          className="flex items-center ring-mainBlue ring-2 hover:ring-blue-700 focus:ring-inset p-1 pl-6 ud-text-input  ud-text-input-small ud-text-sm ud-search-form-autocomplete-input js-header-search-field shadow-md rounded-xl"
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
