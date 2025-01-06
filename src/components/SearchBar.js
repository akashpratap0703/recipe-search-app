import React from 'react';
import { FaSearch } from 'react-icons/fa';  // Importing a search icon from react-icons (can be installed via `npm install react-icons`)
import '../App.css';

const SearchBar = ({ value, onSearchChange, onSearchClick ,onKeyDown}) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={value}
        onKeyDown={onKeyDown}
        onChange={onSearchChange}
        placeholder="Search for recipes"
        className="search-input"
      />
      <button className="search-icon" onClick={onSearchClick}>
        <FaSearch /> {/* Search Icon */}
      </button>
    </div>
  );
};

export default SearchBar;