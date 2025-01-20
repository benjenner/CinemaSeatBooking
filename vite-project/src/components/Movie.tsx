import axios from "axios";
import { Seat } from "./Seat";

const url = "http://localhost:3000/movies";

export interface Movie {
  title: string;
  price: number;
  id: string;
  seats: Seat[];
}

export async function getMovies() {
  // Specificerar att en array av  typen Movie kommer returneras
  const response = await axios.get<Movie[]>(url);
  return response.data;
}

// GetSelectedMovie()

//GetMovieById
