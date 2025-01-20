import { Customer } from "./Customer";

export interface Seat {
  seatNumber: number;
  isOccupied: boolean;
  customer: Customer;
}
