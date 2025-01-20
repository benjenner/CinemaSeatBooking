import { Seat } from "./Seat";

const seats: Seat[] = [
  {
    seatNumber: 1,
    isOccupied: false,
    customer: {
      fullName: "Benjamin",
      phone: 70823823,
    },
  },
  {
    seatNumber: 2,
    isOccupied: true,
    customer: {
      fullName: "Carolin",
      phone: 72373847,
    },
  },
];

// Anropa GetSelectedMovie(). ID returneras.
// Skicka in ID (GetMovieById). Loopa igenom filmens säten och skriv ut

function SeatPicker() {
  return (
    <>
      <div className="container">
        <div className="screen"></div>
        <div className="row">
          {
            // Loopa igenom och skriva ut dom 8 första sätena
            // seats.map((seat,i) =>(
            //   {
            //      // generera html x
            //   }

            //     // generera html y
            //   }
            // )

            seats.map((seat, i) =>
              seat.isOccupied ? (
                <div key={i} className="seat"></div>
              ) : (
                <div key={i} className="seat occupied"></div>
              )
            )
          }
        </div>
        <div className="row">{/* <div className="seat occupied"></div> */}</div>
        <div className="row">{/* <div className="seat"></div> */}</div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
      <p className="text">
        You have selected <span id="count">0</span> seats for a price of $
        <span id="total">0</span>
      </p>
    </>
  );
}

export default SeatPicker;
