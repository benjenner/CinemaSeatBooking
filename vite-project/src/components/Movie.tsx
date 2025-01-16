import axios from "axios";

const url = "http://localhost:3000/movies";

class Movie {
  title: string;
  price: number;
  id: string;

  constructor(title: string, price: number, id: string) {
    this.title = title;
    this.price = price;
    this.id = id;
  }
}

const movieBox = document.getElementById("movie") as HTMLSelectElement;

export async function getAllMovies() {
  // Specificerar att en array av  typen Movie kommer returneras
  const response = await axios.get<Movie[]>(url);
  return response.data;
}

// export async function getAllMovies() {
//   // Specificerar att en array av  typen Movie kommer returneras
//   const response = await axios.get<Movie[]>(url);
//   const movies = response.data;

//   movies.forEach((movie) => {
//     const option = document.createElement("option");
//     movieBox.appendChild(option);
//     option.textContent = `${movie.title} (${movie.price})`;
//   });
// }
