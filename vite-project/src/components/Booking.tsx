import { Movie } from "./Movie";
import { Seat } from "./Seat";
import { Customer } from "./Customer";

export interface Booking {
  seatsId: string[];
  movieId: string;
  customer: Customer;
}
