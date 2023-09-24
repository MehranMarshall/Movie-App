import React from "react";

export const MovieSearch = ({ heading, search, setSearch }) => {
  return (
    <div className="search">
      <h1>{heading}</h1>
      <input
        placeholder="search a movie"
        value={search.value}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};
