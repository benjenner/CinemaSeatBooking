import { Seat } from "./Seat";
import { getMovieById, Movie } from "./Movie";
import { useState, useEffect } from "react";

// const seatClick = (seatNumber: number): void => {

//   // Sätet ska ändra klass till seat.selected
//   // Texten ska uppdateras
// };

type MovieProps = {
  selectedMovie: string;
};

function SeatPicker({ selectedMovie }: MovieProps) {
  const [movie, setMovie] = useState<Movie>();
  const [className, setClassName] = useState("seat");

  // Måste specificera vilket säte som ska väljas
  const seatClick = () => {
    setClassName("seat selected");
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const result = await getMovieById(selectedMovie);
      setMovie(result);
    };

    fetchMovie();

    // Dependency-arrayen sätts till selectedMovie vilket gör att useEffect
    // kommer att köras varje gång den ändras.
  }, [selectedMovie]);

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
          {seatArray1.map((seat, i) =>
            seat.isOccupied ? (
              <div key={seat.seatNumber} className="seat occupied"></div>
            ) : (
              <div key={i} className={className} onClick={seatClick}></div>
            )
          )}
        </div>
        <div className="row">
          {seatArray2.map((seat, i) =>
            seat.isOccupied ? (
              <div key={seat.seatNumber} className="seat occupied"></div>
            ) : (
              <div key={i} className={className} onClick={seatClick}></div>
            )
          )}
        </div>
        <div className="row">
          {seatArray3.map((seat, i) =>
            seat.isOccupied ? (
              <div key={seat.seatNumber} className="seat occupied"></div>
            ) : (
              <div key={i} className={className} onClick={seatClick}></div>
            )
          )}
        </div>
        <div className="row">
          {seatArray4.map((seat, i) =>
            seat.isOccupied ? (
              <div key={seat.seatNumber} className="seat occupied"></div>
            ) : (
              <div key={i} className={className} onClick={seatClick}></div>
            )
          )}
        </div>
        <div className="row">
          {seatArray5.map((seat, i) =>
            seat.isOccupied ? (
              <div key={seat.seatNumber} className="seat occupied"></div>
            ) : (
              <div key={i} className={className} onClick={seatClick}></div>
            )
          )}
        </div>
        <div className="row">
          {seatArray6.map((seat, i) =>
            seat.isOccupied ? (
              <div key={seat.seatNumber} className="seat occupied"></div>
            ) : (
              <div key={i} className={className} onClick={seatClick}></div>
            )
          )}
        </div>
      </div>
      <p className="text">
        You have selected <span id="count">0</span> seats for a price of $
        <span id="total">0</span>
      </p>
    </>
  );
}

export default SeatPicker;
