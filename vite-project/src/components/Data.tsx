import { Booking, Movie, NewMovie, NewSeat, Seat } from "./Interface";
import axios from "axios";

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

export async function getMovies() {
  const response = await axios.get<Movie[]>("http://localhost:3000/movies");
  return response.data;
}

export async function getMovieById(id: string): Promise<Movie | undefined> {
  const movies = await getMovies();
  return movies.find((movie) => movie.id === id);
}

export async function getSeats(id: string): Promise<Seat[]> {
  const url = `http://localhost:3000/movies/${id}`;

  try {
    const response = await axios.get<Movie>(url);

    const movie = response.data;
    if (movie?.seats) {
      return movie.seats;
    } else {
      throw new Error("Data is not available");
    }
  } catch (error) {
    console.error("Error fetching", error);
    throw error;
  }
}

export function generateSeats() {
  let idCounter = 0;
  const seats: NewSeat[] = new Array(48);

  // Genererar ID för varje säte. json-server genererar ej id'n för **inre** objekt
  for (let i = 0; i < seats.length; i++) {
    idCounter++;
    const counterString = idCounter.toString();
    seats[i] = {
      id: counterString,
      isOccupied: false,
    };
  }

  return seats;
}
