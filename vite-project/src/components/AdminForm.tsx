import React, { useState, useEffect } from "react";
import { useFormik, FormikErrors } from "formik";
import { createMovie, updateMovie, deleteMovie } from "./Data";
import { getMovies } from "./Movie";
import { generateSeats, getSeats } from "./Seat";
import { Movie, FormValuesCreate } from "./Interface";

// Tar emot values som argument, ett objekt av typen FormValues. Returnerar objekt av typen FormikErrors<FormValues>
function validateForm(
  values: FormValuesCreate
): FormikErrors<FormValuesCreate> {
  // errors definieras som som ett OBJEKT som följer strukturen av det som ska returneras (FormikErrors<FormValues>)
  // Objektet fylls med porentiella felmeddelanden beroende på logik.
  const errors: FormikErrors<FormValuesCreate> = {};
  if (!values.title) {
    errors.title = "Title is required";
  }

  if (!values.price) {
    errors.price = "Price is required";
  } else if (isNaN(Number(values.price))) {
    errors.price = "Price can only contain numbers";
  }

  return errors;
}

type MovieProps = {
  selectedMovie: string;
  setSelectedMovie: React.Dispatch<React.SetStateAction<string>>;
};

function AdminForm({ selectedMovie, setSelectedMovie }: MovieProps) {
  const [showForm, setShowForm] = useState(false);
  const [showCreateForm, setCreateForm] = useState(false);
  const [showUpdateForm, setUpdateForm] = useState(false);
  const [showDeleteForm, setDeleteForm] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  function resetCrudForms() {
    setCreateForm(false);
    setUpdateForm(false);
    setDeleteForm(false);
    setShowForm(false);
  }

  function clickButton(button: string) {
    resetCrudForms();
    switch (button) {
      case "showForm":
        setShowForm(true);
        break;
      case "showCreate":
        setCreateForm(true);
        break;
      case "showUpdate":
        setUpdateForm(true);
        break;
      case "showDelete":
        setDeleteForm(true);
        break;
    }
  }

  const formik = useFormik<FormValuesCreate>({
    initialValues: {
      title: "",
      price: 0,
    },
    validate: validateForm,
    onSubmit: async (values) => {
      if (showCreateForm) {
        createMovie({
          title: values.title,
          price: values.price,
          seats: generateSeats(),
        });
      }
      if (showUpdateForm) {
        const movieSeats = await getSeats(selectedMovie);
        updateMovie({
          title: values.title,
          price: values.price,
          seats: movieSeats,
          id: selectedMovie,
        });
      }

      resetCrudForms();
      formik.resetForm();
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMovies();
      // setMovies anropas med result för att uppdate movies-variabeln med den hämtade datan
      setMovies(result);
    };

    // fetchData anropas och startar processen med att hämta och uppdatera data
    fetchData();
  }, []);

  return (
    <>
      <div className="adminContainer">
        <button
          className="adminBtn"
          id="admin-btn"
          onClick={() => clickButton("showForm")}
        >
          <span>Administrate movies</span>
        </button>
      </div>
      {showForm && (
        <section className="adminChoiceContainer">
          <button
            className="crudBtn"
            id="admin-btn"
            onClick={() => clickButton("showCreate")}
          >
            <span>Create Movie</span>
          </button>
          <button
            className="crudBtn"
            id="admin-btn"
            onClick={() => clickButton("showUpdate")}
          >
            <span>Update Movie</span>
          </button>
          <button
            className="crudBtn"
            id="admin-btn"
            onClick={() => clickButton("showDelete")}
          >
            <span>Delete Movie</span>
          </button>
        </section>
      )}
      {showCreateForm && (
        <form className="adminWindowContainer" onSubmit={formik.handleSubmit}>
          <div className="inputField">
            <label htmlFor="movieTitle">Movie Title </label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
            ></input>
            {formik.errors.title ? (
              <span className="error">{formik.errors.title}</span>
            ) : null}
          </div>
          <div className="inputField">
            <label htmlFor="moviePrice">Movie Price</label>
            <input
              id="price"
              name="price"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.price}
            ></input>
            {formik.errors.price ? (
              <span className="error">{formik.errors.price}</span>
            ) : null}
          </div>
          <div className="submitButton">
            <button className="submitBtnCrud" type="submit">
              Add Movie
            </button>
          </div>
        </form>
      )}
      {showUpdateForm && (
        <form className="adminWindowContainer" onSubmit={formik.handleSubmit}>
          <div className="movie-container">
            <label htmlFor="movie">Movie to update:</label>
            <select
              name="movie"
              value={selectedMovie}
              id="movie"
              onChange={(event) => setSelectedMovie(event.target.value)}
            >
              {movies.map((movie, i) => (
                <option key={i} value={movie.id}>
                  {movie.title} ({movie.price}$)
                </option>
              ))}
            </select>
          </div>
          <div className="inputField">
            <label htmlFor="movieTitle">Update Title </label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
            ></input>
            {formik.errors.title ? (
              <span className="error">{formik.errors.title}</span>
            ) : null}
          </div>
          <div className="inputField">
            <label htmlFor="moviePrice">Update Price</label>
            <input
              id="price"
              name="price"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.price}
            ></input>
            {formik.errors.price ? (
              <span className="error">{formik.errors.price}</span>
            ) : null}
          </div>
          <div className="submitButton">
            <button className="submitBtnCrud" type="submit">
              Update Movie
            </button>
          </div>
        </form>
      )}
      {showDeleteForm && (
        <section className="adminWindowContainer">
          <div className="movie-container">
            <label htmlFor="movie">Movie to delete:</label>
            <select
              name="movie"
              value={selectedMovie}
              id="movie"
              onChange={(event) => setSelectedMovie(event.target.value)}
            >
              {movies.map((movie, i) => (
                <option key={i} value={movie.id}>
                  {movie.title} ({movie.price}$)
                </option>
              ))}
            </select>
          </div>

          <div className="submitButton">
            <button
              className="submitBtnCrud"
              type="submit"
              onClick={() => {
                deleteMovie(selectedMovie);
                resetCrudForms();
                formik.resetForm();
              }}
            >
              Delete Movie
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export default AdminForm;
