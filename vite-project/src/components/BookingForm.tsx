import { useFormik, FormikErrors } from "formik";
import { FormValues } from "./FormValues";
import { Movie } from "./Movie";
import { Seat } from "./Seat";

// Importerar hook'en "useState"
import React, { useState } from "react";

// Tar emot values som argument, ett objekt av typen FormValues. Returnerar objekt av typen FormikErrors<FormValues>
function validateForm(values: FormValues): FormikErrors<FormValues> {
  // errors definieras som som ett OBJEKT som följer strukturen av det som ska returneras (FormikErrors<FormValues>)
  // Objektet fylls med porentiella felmeddelanden beroende på logik.
  const errors: FormikErrors<FormValues> = {};
  if (!values.fullName) {
    errors.fullName = "Name is required";
  } else if (values.fullName.length < 2) {
    errors.fullName = "Must be 2 characters or more";
  } else if (!values.fullName.includes(" ")) {
    errors.fullName = "Both names required";
  }

  // Regulärt uttryck för att matcha sträng mot siffror
  const regex = /^\d+$/;

  if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (!regex.test(values.phone)) {
    errors.phone = "Phone number can only contain numbers";
  }

  return errors;
}

type Props = {
  selectedMovie: string;
  selectedSeats: string[];
  setSelectedSeats: React.Dispatch<React.SetStateAction<string[]>>;
};

function BookingForm({ selectedMovie, selectedSeats }: Props) {
  const [movie, setMovie] = useState<Movie>();
  const [seats, setSeats] = useState<Seat[]>([]);
  const [showForm, setShowForm] = useState(false);

  function resetSeats() {
    setSeats([]);
  }

  const clickButton = () => {
    if (selectedSeats.length !== 0) {
      setShowForm(true);
      console.log(selectedSeats);
    }
  };

  const formik = useFormik<FormValues>({
    // Var/Hur typ'ar jag parametrarna?
    initialValues: {
      fullName: "",
      phone: "",
    },
    validate: validateForm,
    onSubmit: (values) => {
      // lagra värdena i Seat.customer
      // fetch  method = post -> JSON API
      // alert(JSON.stringify(values, null, 2));
      resetSeats();
      formik.resetForm();
    },
  });
  return (
    <>
      <div className="btnContainer">
        <button className="bookingBtn" id="booking-btn" onClick={clickButton}>
          <span>Book seats</span>
        </button>
      </div>
      {/* Om showform är satt till true, rendera följande */}
      {showForm && (
        // <form className="bookingContainer">
        <form className="bookingContainer" onSubmit={formik.handleSubmit}>
          <div className="inputField">
            <label htmlFor="fullName">Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.fullName}
            ></input>
            {formik.errors.fullName ? (
              <span className="error">{formik.errors.fullName}</span>
            ) : null}
          </div>
          <div className="inputField">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              onChange={formik.handleChange}
              value={formik.values.phone}
            ></input>
            {formik.errors.phone ? (
              <span className="error">{formik.errors.phone}</span>
            ) : null}
          </div>
          <div className="submitButton">
            <button className="submitBtn" type="submit">
              Ok
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default BookingForm;
