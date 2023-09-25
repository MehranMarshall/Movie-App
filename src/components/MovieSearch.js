import React from "react";

export const MovieSearch = ({ heading, searchValue, setSearchValue }) => {
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="header">
      <h1>{heading}</h1>
      <div>
        <input
          placeholder="search a movie"
          value={searchValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
