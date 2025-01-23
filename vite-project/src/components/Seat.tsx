import axios from "axios";
import { Customer } from "./Customer";

export interface Seat {
  id: string;
  isOccupied: boolean;
  customer: Customer;
}

export async function getSeats(id: string) {
  const url = `http://localhost:3000/movies/${id}/seats`;
  // Specificerar att en array av  typen Movie kommer returneras
  const response = await axios.get<Seat[]>(url);
  return response.data;
}
