import { useState } from "react";
import MoviePicker from "./components/MoviePicker";
import Showcase from "./components/Showcase";
import SeatPicker from "./components/SeatPicker";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <MoviePicker></MoviePicker>
      <Showcase></Showcase>
      <SeatPicker></SeatPicker>
    </>
  );
}

export default App;
