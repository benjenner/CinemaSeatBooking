import axios from "axios";
import { Movie, Seat, NewSeat } from "./Interface";

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

  // Genererar ID för varje säte. json-server genererar ej id'n för inre objekt
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
