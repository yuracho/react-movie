import React, { useEffect, useState } from "react";
import "../utils/css/reset.css";
import "./Movie.css";
import MovieList from "./MovieList";
import MovieView from "./MovieView";
import Data from "../utils/api/data.json";
import Modal from "./Modal";

const Movie = () => {
  const [movies, setMovies] = useState(Data);
  //   const [movie, setMovie] = useState(movies[0]);
  const [movie, setMovie] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setMovie(movies[0]);
  }, []);

  const onOver = (id) => {
    setMovie(movies[id - 1]);
  };

  const onOpen = () => {
    setActive(true);
  };

  const onClose = () => {
    setActive(false);
  };

  return (
    <div className="gallery">
      <MovieView movie={movie} onOpen={onOpen} />
      <MovieList movies={movies} onOver={onOver} />

      {active && <Modal movie={movie} onClose={onClose} />}
    </div>
  );
};

export default Movie;
