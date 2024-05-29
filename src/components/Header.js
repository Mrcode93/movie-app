import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../actions";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    dispatch(getMovies(1, searchTerm)); // Dispatch the action with the search term
  };

  return (
    <div className="header">
      <div className="logo">
        <h1>Movie App</h1>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search movie"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
    </div>
  );
};

export default Header;
