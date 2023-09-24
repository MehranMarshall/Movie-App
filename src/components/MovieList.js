import React from "react";

export const MovieList = ({ movies }) => {
  return (
    <div className="movieList">
      {movies.map((movie, index) => {
        return (
          <div>
            <img src={movie.Poster} />
          </div>
        );
      })}
    </div>
  );
};
