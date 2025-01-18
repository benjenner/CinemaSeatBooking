import { useState } from "react";
import MoviePicker from "./components/MoviePicker";
import SeatingGraphics from "./components/SeatingGraphics";
import SeatPicker from "./components/SeatPicker";
import BookingForm from "./components/BookingForm";
import AdminForm from "./components/AdminForm";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <MoviePicker></MoviePicker>
      <SeatingGraphics></SeatingGraphics>
      <SeatPicker></SeatPicker>
      <BookingForm></BookingForm>
      <AdminForm></AdminForm>
    </>
  );
}

export default App;
