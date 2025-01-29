import { Booking, Movie, NewMovie } from "./Interface";
import axios from "axios";
import { getMovieById } from "./Movie";

export async function createReservation(values: Booking) {
  const movie = await getMovieById(values.movieId);

  movie?.seats?.forEach(async (seat) => {
    if (values.seatsId.includes(seat.id)) {
      seat.isOccupied = true;
      seat.customer = values.customer;
    }

    const call = await axios.put(
      `http://localhost:3000/movies/${values.movieId}`,
      movie
    );
  });
}

export async function createMovie(movie: NewMovie) {
  const call = await axios.post(`http://localhost:3000/movies`, movie);
}

export async function updateMovie(movie: Movie) {
  const call = await axios.put(
    `http://localhost:3000/movies/${movie.id}`,
    movie
  );
}

export async function deleteMovie(id: string) {
  const call = await axios.delete(`http://localhost:3000/movies/${id}`);
}
