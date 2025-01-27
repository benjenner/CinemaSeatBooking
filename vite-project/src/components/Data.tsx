import { Booking } from "./Booking";
import { getSeats, Seat } from "./Seat";

export async function CreateReservation(values: Booking) {
  // Hämta alla säten för filmen. För varje säte, sätt isOccupied till true. Lägg till customer med put

  const seats: Seat[] = await getSeats(values.movieId);

  console.log(seats);

  const array = seats.filter((seat) =>
    values.seatsId.map((id) => values.seatsId).includes(values.seatsId)
  );
}
