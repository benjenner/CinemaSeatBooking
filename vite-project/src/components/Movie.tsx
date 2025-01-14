import axios from "axios";

const url = "http://localhost:3000/movies";

class Movie {
  title: string;
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

async function getAllMovies() {
  const movies = await axios.get(url);
  console.log(movies.data);
  return movies.data;
}

const movieBox = document.getElementById("movie") as HTMLSelectElement;

movieBox.addEventListener("click", async () => {
  const movies = await getAllMovies();
  listAllMovies(movies);
});

function listAllMovies(movies: Movie[]) {
  movies.forEach((movie) => {
    const option = document.createElement("Option");
    movieBox.appendChild(option);
    option.title = `${movie.title} (${movie.price})`;
  });
}
