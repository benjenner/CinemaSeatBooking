import React, { useState } from "react";
import MoviePicker from "./components/MoviePicker";
import SeatingGraphics from "./components/SeatingGraphics";
import SeatPicker from "./components/SeatPicker";
import BookingForm from "./components/BookingForm";
import AdminForm from "./components/AdminForm";

function App() {
  const [selectedMovie, setSelectedMovie] = useState<string>("");
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  function resetValues() {
    setSelectedMovie("");
    setSelectedSeats([]);
  }
  return (
    <>
      <MoviePicker
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
      ></MoviePicker>
      <SeatingGraphics></SeatingGraphics>
      <SeatPicker
        selectedMovie={selectedMovie}
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
      ></SeatPicker>
      <BookingForm
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
        selectedMovie={selectedMovie}
        resetValues={resetValues}
      ></BookingForm>
      <AdminForm
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
      ></AdminForm>
    </>
  );
}

export default App;
