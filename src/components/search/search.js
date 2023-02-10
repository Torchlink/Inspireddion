import React, { useRef, useState } from "react";
import { Navigate } from "react-router-dom";

export const SearchBar = () => {
  const searchInputRef = useRef();

  const [searchQuery, setSearchQuery] = useState();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const query = {
      q: searchInputRef.current.value,
    };

    setSearchQuery(new URLSearchParams(query).toString());
  };

  return (
    <div className="searchFormContainer">
      {searchQuery && <Navigate to={`search?${searchQuery}`} />}
      <form onSubmit={onSearchHandler} className="searchForm">
        <button type="submit" className="searchButton">
          🔎
        </button>
        <input type="text" className="search" ref={searchInputRef} />
      </form>
    </div>
  );
};
