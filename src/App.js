import React, { useState, useEffect } from "react";
import "./App.css";
import { MovieList } from "./components/MovieList";
import { MovieSearch } from "./components/MovieSearch";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(
    (search) => {
      fetch(`http://www.omdbapi.com/?s=${search}&apikey=4794ff04`)
        .then((res) => res.json())
        .then((data) => setMovies(data.Search))
        .catch((err) => console.log(err));
    },
    [search]
  );
  return (
    <div className="App">
      <MovieSearch heading="Movies" search={search} setSearch={setSearch} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
