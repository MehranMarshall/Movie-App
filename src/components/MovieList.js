import React from "react";
import { FaHeart } from "react-icons/fa";
export const MovieList = ({ movies }) => {
  return (
    <div className="movieList">
      {movies.map((movie, index) => {
        return (
          <div className="poster">
            <img className="image" src={movie.Poster} />
            <div className="overlay">
              <span className="fav">
                <span className="textFav">Add to Favourites</span>
                <FaHeart className="heart" color="red" size="20px" />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
