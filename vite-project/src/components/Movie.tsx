import axios from "axios";
import { Seat, NewSeat } from "./Seat";

const url = "http://localhost:3000/movies";

export interface Movie {
  title: string;
  price: number;
  id: string;
  seats?: Seat[];
}

export interface NewMovie {
  title: string;
  price: number;
  seats?: NewSeat[];
}

export async function getMovies() {
  // Specificerar att en array av  typen Movie kommer returneras
  const response = await axios.get<Movie[]>(url);
  return response.data;
}

// GetSelectedMovie()

//GetMovieById

export async function getMovieById(id: string): Promise<Movie | undefined> {
  const movies = await getMovies();
  return movies.find((movie) => movie.id === id);
}
