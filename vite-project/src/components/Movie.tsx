import axios from "axios";
import { Movie } from "./Interface";

const url = "http://localhost:3000/movies";

export async function getMovies() {
  const response = await axios.get<Movie[]>(url);
  return response.data;
}

export async function getMovieById(id: string): Promise<Movie | undefined> {
  const movies = await getMovies();
  return movies.find((movie) => movie.id === id);
}
