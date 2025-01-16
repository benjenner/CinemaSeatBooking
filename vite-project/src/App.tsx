import { useState } from "react";
import MoviePicker from "./components/MoviePicker";
import SeatingGraphics from "./components/SeatingGraphics";
import SeatPicker from "./components/SeatPicker";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <MoviePicker></MoviePicker>
      <SeatingGraphics></SeatingGraphics>
      <SeatPicker></SeatPicker>
    </>
  );
}

export default App;
