import React, { useState, useEffect } from "react";
import "./App.css";
import Favourites from "./components/Favourites";
import { MovieList } from "./components/MovieList";
import { MovieSearch } from "./components/MovieSearch";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=4794ff04`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      })
      .catch((err) => console.log(err));
  }, [searchValue]);

  const addToFav = (movie) => {
    const newFav = [...favourites, movie];
    setFavourites(newFav);
  };

  const removeFromFav = (movie) => {
    const newFav = favourites.filter((fav) => fav.imdbID !== movie.imdbID);
    setFavourites(newFav);
  };
  return (
    <div className="App">
      <MovieSearch
        heading="Movies"
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <MovieList movies={movies} addToFav={addToFav} />
      <Favourites favourites={favourites} removeFromFav={removeFromFav} />
    </div>
  );
}

export default App;
