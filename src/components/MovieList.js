import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
export const MovieList = ({ movies, addToFav }) => {
  return (
    <div className="movieList">
      {movies.map((movie, index) => {
        return (
          <div className="poster">
            <img className="image" src={movie.Poster} />
            <div className="overlay">
              <span className="fav">
                <span className="textFav">Add to Favourites</span>
                <FaHeart
                  className="heart"
                  size="20px"
                  onClick={() => {
                    addToFav(movie);
                  }}
                />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
