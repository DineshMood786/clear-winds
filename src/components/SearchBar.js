import React, { useEffect, useState } from "react";
import "../css/SearchBar.css";

function SearchBar({ value, onChange }) {
  const [searchValue, setSearchValue] = useState(value);

  const handleChange = (e) => setSearchValue(e.target.value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onChange(searchValue);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchValue, onChange]);

  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchbar-input"
        placeholder="Search products"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
