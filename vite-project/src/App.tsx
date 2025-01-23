import React, { useState } from "react";
import MoviePicker from "./components/MoviePicker";
import SeatingGraphics from "./components/SeatingGraphics";
import SeatPicker from "./components/SeatPicker";
import BookingForm from "./components/BookingForm";
import AdminForm from "./components/AdminForm";

function App() {
  const [selectedMovie, setSelectedMovie] = useState<string>("");
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
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
      ></BookingForm>
      <AdminForm></AdminForm>
    </>
  );
}

export default App;
