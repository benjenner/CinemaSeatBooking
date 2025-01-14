function Main() {
  return (
    <>
      <main>
        <div className="movie-container">
          <label htmlFor="movie">Pick a movie:</label>
          <select name="movie" id="movie">
            {/* <option value="100"></option> */}
          </select>
        </div>
        <ul className="showcase">
          <li>
            <div className="seat"></div>
            <small>N/A</small>
          </li>
          <li>
            <div className="seat selected"></div>
            <small>Selected</small>
          </li>
          <li>
            <div className="seat occupied"></div>
            <small>Occupied</small>
          </li>
        </ul>
        <div className="container">
          <div className="screen"></div>
          <div className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat occupied"></div>
            <div className="seat occupied"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat occupied"></div>
            <div className="seat occupied"></div>
          </div>
          <div className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat occupied"></div>
            <div className="seat occupied"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat occupied"></div>
            <div className="seat occupied"></div>
            <div className="seat occupied"></div>
            <div className="seat"></div>
          </div>
        </div>
        <p className="text">
          You have selected <span id="count">0</span> seats for a price of $
          <span id="total">0</span>
        </p>
      </main>
    </>
  );
}

export default Main;
