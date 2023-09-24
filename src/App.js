import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4794ff04`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return <div className="App"></div>;
}

export default App;
