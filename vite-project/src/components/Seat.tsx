import axios from "axios";
import { Customer } from "./Customer";
import { Movie } from "./Movie";

export interface Seat {
  id: string;
  isOccupied: boolean;
  customer: Customer;
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
