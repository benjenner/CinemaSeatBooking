export interface Booking {
  seatsId: string[];
  movieId: string;
  customer: Customer;
}

export interface Customer {
  fullName: string;
  phone: string;
}

export interface FormValues {
  fullName: string;
  phone: string;
}

export interface FormValuesCreate {
  title: string;
  price: number;
}

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

export interface Seat {
  id: string;
  isOccupied: boolean;
  customer: Customer;
}

export interface NewSeat {
  isOccupied: boolean;
  id: string;
}
