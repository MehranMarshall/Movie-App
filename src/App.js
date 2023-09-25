import React, { useState, useEffect } from "react";
import "./App.css";
import { MovieList } from "./components/MovieList";
import { MovieSearch } from "./components/MovieSearch";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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
  return (
    <div className="App">
      <MovieSearch
        heading="Movies"
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
