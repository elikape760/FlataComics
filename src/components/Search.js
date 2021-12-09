import React from "react";
import { Input } from 'semantic-ui-react'

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Heroes:</label>
      <Input
      focus placeholder="search"
        type="text"
        id="search"
        placeholder="Type a hero to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
    </div>
  );
}
  
  export default Search;