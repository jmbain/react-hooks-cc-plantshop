import React, {useState} from "react";

function Search({searchText, setSearchText}) {

  function handleChange(event) {
    setSearchText(event.target.value)
    // console.log(searchText)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
}

export default Search;
