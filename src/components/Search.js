import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Exercises:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
      onChange={(e) => setSearchTerm(e.target.value)}
      >Click me 😉</button>
    </div>
  );
}
  
  export default Search;