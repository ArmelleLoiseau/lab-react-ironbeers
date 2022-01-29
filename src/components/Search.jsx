import React from "react";

const Search = ({ searchedBeer, setSearchedBeer }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="input search-bar"
        name="search"
        placeholder="Search"
        value={searchedBeer}
        onChange={(e) => setSearchedBeer(e.target.value)}
      ></input>
    </div>
  );
};

export default Search;
