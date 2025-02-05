import { getMovieById } from "./Data";
import { useState, useEffect } from "react";
import { Movie, Seat } from "./Interface";

type Props = {
  selectedSeats: string[];
  setSelectedSeats: React.Dispatch<React.SetStateAction<string[]>>;
  selectedMovie: string;
};

function SeatPicker({ selectedMovie, selectedSeats, setSelectedSeats }: Props) {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const fetchMovie = async () => {
      const result = await getMovieById(selectedMovie);
      setMovie(result);
    };

    fetchMovie();

    // Dependency-arrayen sätts till selectedMovie vilket gör att useEffect
    // kommer att köras varje gång den ändras.
  }, [selectedMovie]);

  const seatClick = (id: string) => {
    if (selectedSeats.includes(id)) {
    } else {
      // Uppdaterar selectedSeats.
      // Callback-funktionen prevSelectedSeats får det aktuella värdet av selectedSeats
      // Spread-operatorn skapar en ny array med alla positioner från prevSelectedSeats samt det nya ID't
      setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, id]);
    }
  };

  const allSeats: Seat[] = movie?.seats || [];
  const seatArray1: Seat[] = allSeats.slice(0, 8);
  const seatArray2: Seat[] = allSeats.slice(8, 16);
  const seatArray3: Seat[] = allSeats.slice(16, 24);
  const seatArray4: Seat[] = allSeats.slice(24, 32);
  const seatArray5: Seat[] = allSeats.slice(32, 40);
  const seatArray6: Seat[] = allSeats.slice(40, 48);

  return (
    <>
      <div className="container">
        <div className="screen"></div>
        <div className="row">
          {seatArray1.map((seat) =>
            seat.isOccupied ? (
              <div key={seat.id} className="seat occupied"></div>
            ) : (
              <div
                key={seat.id}
                className={
                  selectedSeats.includes(seat.id) ? "seat selected" : "seat"
                }
                onClick={() => seatClick(seat.id)}
              ></div>
            )
          )}
        </div>
        <div className="row">
          {seatArray2.map((seat) =>
            seat.isOccupied ? (
              <div key={seat.id} className="seat occupied"></div>
            ) : (
              <div
                key={seat.id}
                className={
                  selectedSeats.includes(seat.id) ? "seat selected" : "seat"
                }
                onClick={() => seatClick(seat.id)}
              ></div>
            )
          )}
        </div>
        <div className="row">
          {seatArray3.map((seat) =>
            seat.isOccupied ? (
              <div key={seat.id} className="seat occupied"></div>
            ) : (
              <div
                key={seat.id}
                className={
                  selectedSeats.includes(seat.id) ? "seat selected" : "seat"
                }
                onClick={() => seatClick(seat.id)}
              ></div>
            )
          )}
        </div>
        <div className="row">
          {seatArray4.map((seat) =>
            seat.isOccupied ? (
              <div key={seat.id} className="seat occupied"></div>
            ) : (
              <div
                key={seat.id}
                className={
                  selectedSeats.includes(seat.id) ? "seat selected" : "seat"
                }
                onClick={() => seatClick(seat.id)}
              ></div>
            )
          )}
        </div>
        <div className="row">
          {seatArray5.map((seat) =>
            seat.isOccupied ? (
              <div key={seat.id} className="seat occupied"></div>
            ) : (
              <div
                key={seat.id}
                className={
                  selectedSeats.includes(seat.id) ? "seat selected" : "seat"
                }
                onClick={() => seatClick(seat.id)}
              ></div>
            )
          )}
        </div>
        <div className="row">
          {seatArray6.map((seat) =>
            seat.isOccupied ? (
              <div key={seat.id} className="seat occupied"></div>
            ) : (
              <div
                key={seat.id}
                className={
                  selectedSeats.includes(seat.id) ? "seat selected" : "seat"
                }
                onClick={() => seatClick(seat.id)}
              ></div>
            )
          )}
        </div>
      </div>
      <p className="text">
        You have selected <span id="count">{selectedSeats.length}</span> seats
        for a price of $
        <span id="total">{selectedSeats.length * (movie?.price || 0)}</span>
      </p>
    </>
  );
}

export default SeatPicker;
