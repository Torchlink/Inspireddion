import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState();

  const navigate = useNavigate();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const query = {
      q: searchQuery,
    };

    const newUrl = new URLSearchParams(query).toString();
    navigate(`search/?${newUrl}`);
  };

  return (
    <div className="searchFormContainer">
      <form onSubmit={onSearchHandler} className="searchForm">
        <button type="submit" className="searchButton">
          🔎
        </button>
        <input type="text" className="search" onChange={({target}) => setSearchQuery(target.value)} />
      </form>
    </div>
  );
};
