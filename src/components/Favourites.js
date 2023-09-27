import React from "react";
import { FaPrescriptionBottle } from "react-icons/fa";

function Favourites({ favourites, removeFromFav }) {
  return (
    <div className="favourites">
      <h1 className="header">Favourites</h1>
      <div className="favList">
        {favourites.map((fav) => {
          return (
            <div className="poster">
              <img className="image" src={fav.Poster} />
              <div className="overlay">
                <span className="fav">
                  <span className="textFav">Remove from Favourites</span>
                  <FaPrescriptionBottle
                    className="heart"
                    size="20px"
                    onClick={() => {
                      removeFromFav(fav);
                    }}
                  />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favourites;
