import React from "react";
import { useState, useEffect } from "react";
import { getAllMovies } from "./Movie";

export const MoviePicker = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
      <div className="movie-container">
        <label htmlFor="movie">Pick a movie:</label>
        <select name="movie" id="movie"></select>
      </div>
    </>
  );
};

export default MoviePicker;
