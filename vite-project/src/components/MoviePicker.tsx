import React from "react";
import { useState, useEffect } from "react";
import { getMovies } from "./Movie";
import { Movie } from "./Movie";

type MovieProps = {
  selectedMovie: string;
  setSelectedMovie: React.Dispatch<React.SetStateAction<string>>;
};

const MoviePicker: React.FC<MovieProps> = ({
  selectedMovie,
  setSelectedMovie,
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  // useEffect-hooken används för att köra en effekt när komponenten först laddas.
  // Den angivna tomma arrayen betyder att effekten bara körs en gång när komponenten monteras.
  useEffect(() => {
    const fetchData = async () => {
      const result = await getMovies();
      // setMovies anropas med result för att uppdate movies-variabeln med den hämtade datan
      setMovies(result);
    };

    // fetchData anropas och startar processen med att hämta och uppdatera data
    fetchData();
  }, []);

  return (
    <>
      <div className="movie-container">
        <label htmlFor="movie">Pick a movie:</label>
        <select
          name="movie"
          value={selectedMovie}
          id="movie"
          onChange={(event) => setSelectedMovie(event.target.value)}
        >
          {movies.map((movie, i) => (
            <option key={i} value={movie.id}>
              {movie.title} ({movie.price}$)
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default MoviePicker;
