import React from "react";

function Search({Search,onSearchChange}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={Search}
        //onChange={(e) => console.log("Searching...")}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default Search;
